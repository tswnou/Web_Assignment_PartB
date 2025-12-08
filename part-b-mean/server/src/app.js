import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import coursesRoutes from "./routes/courses.routes.js";
import usersRoutes from "./routes/users.routes.js";
import enrollmentsRoutes from "./routes/enrollments.routes.js";

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.json({ message: "Server is running!" });
});

// API ROUTES
app.use("/api/courses", coursesRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/enrollments", enrollmentsRoutes);

export default app;
