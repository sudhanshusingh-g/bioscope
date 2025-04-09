import express from "express";
import auth from "../middlewares/auth.js";
import {currentUser} from "../controllers/userController.js";
const router=express.Router();


router.get("/profile",auth,currentUser);




export default router;