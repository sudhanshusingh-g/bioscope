import express from "express";
import auth from "../middlewares/auth.js";
import {
  currentUser,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";
const router = express.Router();

router
  .get("/profile", auth, currentUser)
  .patch("/profile", auth, updateUser)
  .delete("/profile", auth, deleteUser);
;


export default router;
