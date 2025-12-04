import { Router } from "express";
import { registerUser, getUsers } from "../controllers/users.controller.js";

const router = Router();

router.get("/", getUsers);
router.post("/", registerUser);

export default router;
