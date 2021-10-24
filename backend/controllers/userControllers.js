import asyncHandler from "express-async-handler";
import generateWebToken from "../utils/generateToken.js";
import sendMail from "../utils/sendMail.js";
import crypto from "crypto";

// Import model
import UserModel from "../models/UserModel.js";

// Request: POST
// Route: POST /api/users/register
// Access: Public
export const userRegister = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword, photo, dob } =
    req.body;

  // Check if user is exist
  const isExists = await UserModel.findOne({ email });

  if (isExists) {
    throw new Error("User Already exist with this email address");
  }

  if (confirmPassword !== password) {
    throw new Error("Confirm password must be a equal password");
  }

  // Create new user
  const user = await UserModel.create({
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
    photo,
    dob,
  });

  if (user) {
    res.status(200).json({
      id: user._id,
      photo: user.photo,
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      email,
      token: generateWebToken(user._id),
    });
  }
});

// Request: POST
// Route: POST /api/users/login
// Access: Public
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (!user) {
    throw new Error("Wrong Email or Password");
  }

  const isMatched = await user.matchPassword(password);

  if (!isMatched) {
    throw new Error("Wrong Email or Password");
  }

  if (!email || !password) {
    throw new Error("Please enter email and password");
  }

  if (user && isMatched) {
    res.status(200).json({
      id: user._id,
      isAdmin: user.isAdmin,
      phoneNumber: user.phoneNumber,
      photo: user.photo,
      firstName: user.firstName,
      lastName: user.lastName,
      email,
      token: generateWebToken(user._id),
    });
  }
});

// Request: POST
// Route: POST /api/users/forgotpassword
// Access: Public

export const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await UserModel.findOne({ email });

  if (!user) {
    res.status(400);
    throw new Error("User Does not Exists");
  }

  if (user) {
    const resetToken = await user.getResetPasswordToken();

    user.save({ validateBeforeSave: false });

    const resetUrl = `${req.protocol}://localhost:3000/resetpassword/${resetToken}`;
    const message = `Your reset passoword Link ${resetUrl}`;

    try {
      sendMail({
        email,
        message,
        subject: "Reset Password",
      });

      res.status(200).send("Reset Password Email has been Sent");
    } catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpiry = undefined;

      user.save({ validateBeforeSave: false });

      res.status(400).send("Email could not sent");
    }
  }
});

// Request: PUT
// Route: PUT /api/users/resetpassword/:resettoken
// Access: Public

export const resetpassword = asyncHandler(async (req, res) => {
  const { password, confirmPassword } = req.body;

  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resettoken)
    .digest("hex");

  const user = await UserModel.findOne({
    resetPasswordToken,
    resetPasswordExpiry: { $gt: Date.now() },
  });

  if (!user) {
    res.status(400);
    throw new Error("User Not Found");
  }

  if (password !== confirmPassword) {
    res.status(400);
    throw new Error("Password Must Matched");
  }

  user.password = password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpiry = undefined;

  user.save();

  res.status(200).json({
    message: "Password Reset Successfully",
    token: generateWebToken(user._id),
  });
});

// Request: GET
// Route: GET /api/users/profile
// Access: Private
export const getProfile = asyncHandler(async (req, res) => {
  const user = await UserModel.findById(req.user.id).select("-password");

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  if (user) {
    res.status(200).json({
      id: user._id,
      isAdmin: user.isAdmin,
      photo: user.photo,
      phoneNumber: user.phoneNumber,
      firstName: user.firstName,
      lastName: user.lastName,
      dob: user.dob,
      email: user.email,
      token: generateWebToken(user._id),
    });
  }
});

// Request: PUT
// Route: PUT /api/users/profile
// Access: Private
export const updateProfile = asyncHandler(async (req, res) => {
  const user = await UserModel.findById(req.user.id);

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  user.firtName = req.body.firtName || user.firtName;
  user.lastName = req.body.lastName || user.lastName;
  user.phoneNumber = req.body.phoneNumber || user.phoneNumber;
  user.photo = req.body.photo || user.photo;
  user.dob = req.body.dob || user.dob;
  user.password = req.body.password || user.password;

  user.save();

  res.status(202).json(user);
});
