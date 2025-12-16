import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import coursesRoutes from "./routes/courses.routes.js";
import usersRoutes from "./routes/users.routes.js";
import enrollmentsRoutes from "./routes/enrollments.routes.js";
import booksRoutes from "./routes/books.routes.js";
import videosRoutes from "./routes/videos.routes.js";





dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/courses", coursesRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/enrollments", enrollmentsRoutes);
app.use("/api/books", booksRoutes);
app.use("/api/videos", videosRoutes);

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Server is running" });
});

export default app;
