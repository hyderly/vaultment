import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import crypto from "crypto";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: [true, "First Name is required"],
  },
  lastName: {
    type: String,
    require: [true, "Last Name is required"],
  },
  phoneNumber: {
    type: Number,
    require: false,
  },
  photo: {
    type: String,
    require: false,
    default: "123.png",
  },
  email: {
    type: String,
    unique: true,
    require: [true, "Email is required"],

    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  dob: {
    type: Date,
    required: [false, "DOB is required"],
    default: null,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },

  resetPasswordToken: String,
  resetPasswordExpiry: Date,
});

// userSchema.post("save", function (next) {
//   this.photo = `https://avatars.dicebear.com/api/identicon/${
//     this.firstName.split(" ")[0]
//   }.svg`;
// });

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.getResetPasswordToken = async function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpiry = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const UserModel = mongoose.model("user", userSchema);

export default UserModel;
