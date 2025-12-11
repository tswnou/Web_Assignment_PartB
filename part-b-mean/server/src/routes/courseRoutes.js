import express from "express";
import { getAllCourses, getCourseById } from "../controllers/courseController.js";

const router = express.Router();

// GET /api/courses
router.get("/", getAllCourses);

// GET /api/courses/:id
router.get("/:id", getCourseById);

export default router;
