import app from "./src/app.js";
import connectDB from "./src/config/db.js";

import coursesRoutes from "./src/routes/courses.routes.js";

const PORT = process.env.PORT || 5000;

app.use("/api/courses", coursesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
