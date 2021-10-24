import express from "express";
const router = express.Router();

// Autherization
import { protectRoute } from "../middlewares/authentication.js";

// Controllers
import {
  userRegister,
  authUser,
  forgotPassword,
  resetpassword,
  getProfile,
  updateProfile,
} from "../controllers/userControllers.js";

router.post("/register", userRegister);

router.post("/login", authUser);
router.post("/forgotpassword", forgotPassword);
router.put("/resetpassword/:resettoken", resetpassword);
router.get("/profile", protectRoute, getProfile);
router.put("/profile", protectRoute, updateProfile);

export default router;
