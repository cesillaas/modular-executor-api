import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import executeRouter from "./routes/execute";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/execute", executeRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
