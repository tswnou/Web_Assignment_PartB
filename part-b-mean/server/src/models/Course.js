import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: String,
  category: String,
  description: String,
  level: String,
  thumbnail: String,
});

export default mongoose.model("Course", courseSchema);
