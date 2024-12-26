import express from "express";
import { generateImage } from "../Controllers/imageController.js";
import userAuth from "../Middleware/auth.js";

const imageRouter = express.Router();

imageRouter.post("/generate-image", userAuth, generateImage);

export default imageRouter

// http://localhost:4000/api/image/generate-image