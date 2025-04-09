import express from "express";
import auth from "../middlewares/auth.js";
import { currentUser } from "../controllers/userController.js";
import { verifyRole } from "../middlewares/verifyRole.js";
const router = express.Router();

// Admin
router.get("/profile", auth, verifyRole(["admin"]), currentUser);

export default router;
