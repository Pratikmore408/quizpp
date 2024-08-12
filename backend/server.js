import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import quizRoutes from "./routes/quizRoutes.js";
import tagRoutes from "./routes/tagRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/quiz", quizRoutes);
app.use("/api/tags", tagRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
