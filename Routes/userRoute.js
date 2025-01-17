import express from "express";
import {
  loginUser,
  registerUser,
  userCredits,
} from "../Controllers/userController.js";
import userAuth from "../Middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/credits", userAuth, userCredits);

export default userRouter;

// http://localhost:4000/api/user/register
// http://localhost:4000/api/user/login
// http://localhost:4000/api/user/credits
