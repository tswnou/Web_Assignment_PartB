import { Router } from "express";
import { getAllCourses, getCourseById } from "../controllers/courses.controller.js";

const router = Router();

//GET ALL COURSES
router.get("/", getAllCourses);

//GET COURSE BY ID
router.get("/:id", getCourseById);

export default router;
