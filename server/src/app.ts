import express, { Application, Request, Response } from "express";
const cors = require("cors");

import "dotenv/config";
require("dotenv").config();
const db = require("./config/database.config");
const Player = require("./models/player");
const playerRouter = require("./routes/playerRoutes");
const minesRouter = require("./routes/minesRoutes");

const app: Application = express();
const PORT = process.env.port || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("hello");
});

app.use("/api", playerRouter);
app.use("/api", minesRouter);

db.sync({ force: true })
  .then((res: any) => {
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  })
  .catch(() => {});
