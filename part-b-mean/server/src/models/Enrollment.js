import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  courseId: mongoose.Schema.Types.ObjectId,
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Enrollment", enrollmentSchema);
