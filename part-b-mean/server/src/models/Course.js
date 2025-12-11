import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  level: { type: String, required: true }
}, { timestamps: true });

export const Course = mongoose.model("Course", CourseSchema);
