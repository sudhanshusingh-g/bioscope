import express from "express";
import cors from "cors";

import dotenv from "dotenv";
import dbConfig from "./config/dbConfig.js";
import router from "./routes/userRoute.js";
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();
const app = express();
const PORT = 8000;

// DB connection
dbConfig();

app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  })
);

app.use(express.json());
// Routes
app.use("/api/v1", router);
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
