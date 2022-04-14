import { Request, Response } from "express";
import bcrypt from "bcrypt";
const { Op } = require("sequelize");

const Player = require("../models/player");

const playerLogin = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const findPlayer = await Player.findOne({
      where: {
        username,
      },
    });

    if (findPlayer === null) {
      return res.status(200).json({ message: "Wrong credentials" });
    }

    const check = await bcrypt.compare(password, findPlayer.password);

    if (!check) {
      return res.status(200).json({ message: "wrong" });
    }

    return res.status(200).json({
      message: "User logged in",
    });
  } catch (error) {
    res.status(200).json({
      message: "error",
    });
  }
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

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await Player.create({
      username,
      email,
      password: hashedPassword,
    });

    return res.status(200).json({
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
