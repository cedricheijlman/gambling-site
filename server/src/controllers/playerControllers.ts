import { Request, Response } from "express";
const Player = require("../models/player");

const playerLogin = async (req: Request, res: Response) => {
  res.status(200).json({
    message: "Player Login Route",
  });
};

const playerRegister = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    const findPlayer = await Player.findOne({ where: { username: username } });

    if (findPlayer === null) {
      console.log(username, email, password);
    }

    res.status(200).json({
      message: "Player Register Route",
    });
  } catch (error) {
    console.log(error);
    res.status(200).json({
      message: "error",
    });
  }
};

module.exports = {
  playerLogin,
  playerRegister,
};
