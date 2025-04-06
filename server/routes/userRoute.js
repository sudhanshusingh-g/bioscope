import express from "express";
import { createUser, loginUser,currentUser } from "../controllers/userController.js";
import auth from "../middlewares/auth.js";
const router=express.Router();

router.post("/users/register",createUser);
router.post("/users/login" ,loginUser);
router.get("/users/profile",auth,currentUser);

export default router;