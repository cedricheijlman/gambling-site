import express, { Application, Request, Response } from "express";
import "dotenv/config";
require("dotenv").config();

const app: Application = express();
const PORT = process.env.port || 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
