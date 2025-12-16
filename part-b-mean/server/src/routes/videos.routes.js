import { Router } from "express";
import Video from "../models/Video.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
