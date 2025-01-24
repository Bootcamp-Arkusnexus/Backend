import express from "express";
import { PORT } from "./config.js";
import userRoutes from "./routes/user.routes.js";
import morgan from "morgan"; // Visualize HTTP REQUESTS in the console
import cors from "cors";
// import { ORIGIN } from "./config.js";

const app = express();

app.use(cors());

app.use(morgan("dev"));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World! using Express JS");
});

app.use(userRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
