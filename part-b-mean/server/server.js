import app from "./src/app.js";
import connectDB from "./src/config/db.js";

import coursesRoutes from "./src/routes/courses.routes.js";
import usersRoutes from "./src/routes/users.routes.js";

const PORT = process.env.PORT || 5000;

app.use("/api/courses", coursesRoutes);
app.use("/api/users", usersRoutes);

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
