import { Request, Response } from "express";

const playerLogin = (req: Request, res: Response) => {
  res.status(200).json({
    message: "Message",
  });
};

module.exports = {
  playerLogin,
};
