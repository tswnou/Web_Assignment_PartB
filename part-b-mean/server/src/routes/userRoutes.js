import express from "express";
import { registerUser } from "../controllers/userController.js";

const router = express.Router();

// POST /api/users
router.post("/", registerUser);

export default router;
