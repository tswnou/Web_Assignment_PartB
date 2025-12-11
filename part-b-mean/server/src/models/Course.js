import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  ects: { type: Number, required: true },
  category: { type: String, required: true }
});

export default mongoose.model("Course", CourseSchema);
