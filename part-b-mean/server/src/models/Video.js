import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  thumbnail: String,
  duration: String,
  youtubeLink: String
});

const Video = mongoose.model("Video", VideoSchema);
export default Video;
