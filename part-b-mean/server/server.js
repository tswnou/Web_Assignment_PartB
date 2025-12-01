import app from "./src/app.js";
import connectDB from "./src/config/db.js";
import usersRoutes from "./src/routes/users.routes.js";
import coursesRoutes from "./src/routes/courses.routes.js";
import enrollmentsRoutes from "./src/routes/enrollments.routes.js";

const PORT = process.env.PORT || 5000;

// --- ROUTES ΕΔΩ ---
app.use("/api/users", usersRoutes);
app.use("/api/courses", coursesRoutes);
app.use("/api/enrollments", enrollmentsRoutes);

// --- START SERVER ---
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
