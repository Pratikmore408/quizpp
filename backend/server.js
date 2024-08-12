import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import quizRoutes from "./routes/quizRoutes.js";
import tagRoutes from "./routes/tagRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { loadData } from "./utils/dataLoader.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const __dirname = path.resolve();

app.use("/api/quiz", quizRoutes);
app.use("/api/tags", tagRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
  loadData();
});
