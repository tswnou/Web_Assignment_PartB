import mongoose from "mongoose";
import dotenv from "dotenv";
import Video from "./src/models/Video.js";

dotenv.config();

const videos = [
  {
    title: "Introducing How Computers Work - Crash Course",
    description: "A beginner-friendly explanation of how computers operate.",
    duration: "1:20",
    category: "Computer Science",
    youtubeLink: "https://www.youtube.com/watch?v=OAx_6-wdslM",
    thumbnail: "/assets/img/videos/cs1.jpg"
  },
  {
    title: "Harvard CS50 – Full Computer Science University Course",
    description: "Harvard’s CS50 course introduction.",
    duration: "1:00:51:37",
    category: "Computer Science",
    youtubeLink: "https://www.youtube.com/watch?v=8mAITcNt710",
    thumbnail: "/assets/img/videos/cs2.jpg"
  },
  {
    title: "Linear Algebra Full Course",
    description: "MIT's famous linear algebra course.",
    duration: "39:48",
    category: "Mathematics",
    youtubeLink: "https://www.youtube.com/watch?v=ZK3O402wf1c",
    thumbnail: "/assets/img/videos/math1.jpg"
  },
  {
    title: "Algorithms and Data Structures Tutorial",
    description: "A full course for beginners.",
    duration: "5:22:08",
    category: "Algorithms",
    youtubeLink: "https://www.youtube.com/watch?v=8hly31xKli0",
    thumbnail: "/assets/img/videos/alg1.jpg"
  }
];

async function seedVideos() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await Video.deleteMany();
    await Video.insertMany(videos);
    console.log("Videos seeded successfully");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seedVideos();
