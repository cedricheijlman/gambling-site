import { Request, Response } from "express";
const { Op } = require("sequelize");

const Player = require("../models/player");

const playerLogin = async (req: Request, res: Response) => {
  res.status(200).json({
    message: "Player Login Route",
  });
};

const playerRegister = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    const findPlayer = await Player.findOne({
      where: {
        [Op.or]: [{ username }, { email }],
      },
    });

    if (findPlayer !== null) {
      return res.status(200).json({ message: "Player already exists" });
    }

    const newUser = await Player.create({ username, email, password });

    res.status(200).json({
      message: "User created",
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
