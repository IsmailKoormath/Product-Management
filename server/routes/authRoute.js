import express from "express";
import { login, signUp } from "../controllers/authController.js";
import { loginValidator } from "../middlewares/login.validation.middleware.js";
import { userMiddleware } from "../middlewares/user.middlewre.js";

const router = express.Router();
const path = "/auth";

//........user login and log out...........//
router.post(`${path}/signup`, userMiddleware, signUp);
router.post(`${path}/login`, loginValidator, login);

export default router;
