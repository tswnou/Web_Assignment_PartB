import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  ects: Number,
  category: String
});

const Course = mongoose.model("Course", CourseSchema);
export default Course;
