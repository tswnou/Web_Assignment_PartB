import express from "express";
import Enrollment from "../models/Enrollment.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const enrollment = await Enrollment.create(req.body);
  res.json(enrollment);
});

export default router;
