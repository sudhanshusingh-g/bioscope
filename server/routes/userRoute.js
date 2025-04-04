import express from "express";
import { createUser, loginUser,currentUser } from "../controllers/userController.js";
import auth from "../middlewares/auth.js";
const router=express.Router();

router.post("/register",createUser);
router.post("/login" ,loginUser);
router.get("/profile",auth,currentUser);

export default router;