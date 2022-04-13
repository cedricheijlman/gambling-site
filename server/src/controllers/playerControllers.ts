import { Request, Response } from "express";

const playerLogin = (req: Request, res: Response) => {
  res.status(200).json({
    message: "Player Login Route",
  });
};

const playerRegister = (req: Request, res: Response) => {
  res.status(200).json({
    message: "Player Register Route",
  });
};

module.exports = {
  playerLogin,
  playerRegister,
};
