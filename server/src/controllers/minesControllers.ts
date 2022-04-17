import { Request, Response } from "express";

const minesRandomizer = async (req: Request, res: Response) => {
  res.json({ message: "message" });
};
module.exports = {
  minesRandomizer,
};
