import express from "express";
import Enrollment from "../models/Enrollment.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const enrollment = await Enrollment.create(req.body);
    res.status(201).json(enrollment);
  } catch (err) {
    res.status(400).json({ error: "Enrollment failed" });
  }
});

export default router;
