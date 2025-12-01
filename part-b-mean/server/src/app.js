import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// --- TEST ROUTE ---
app.get("/", (req, res) => {
  res.json({ message: "Server is running!" });
});

export default app;
