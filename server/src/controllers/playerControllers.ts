import { Request, Response } from "express";
import bcrypt from "bcrypt";
const { Op } = require("sequelize");
import jwt from "jsonwebtoken";

const Player = require("../models/player");

const playerLogin = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    // Check if player exists
    const findPlayer = await Player.findOne({
      where: {
        username,
      },
    });

    // if player doesn't exists
    if (findPlayer === null) {
      return res
        .status(200)
        .json({ errorCode: 0, message: "No user with username exist" });
    }

    // compare passwords
    const check = await bcrypt.compare(password, findPlayer.password);

    // if password doesn't match
    if (!check) {
      return res
        .status(200)
        .json({ errorCode: 1, message: "Wrong Credentials" });
    }

    // Create JWT Access Token
    const accessToken = await jwt.sign(
      { username: username },
      String(process.env.SECRET_CODE)
    );
    console.log(findPlayer.dataValues);
    // user is logged in
    return res.status(200).json({
      message: "User logged in",
    });
  } catch (error) {
    res.status(400).json({
      errorCode: 2,
      Message: "Server Error",
    });
  }
};

const playerRegister = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    // Check if user exists
    const findPlayer: Object | null | undefined = await Player.findOne({
      where: {
        username,
      },
    });

    // if user exits with username
    if (findPlayer !== null) {
      return res
        .status(200)
        .json({ errorCode: 0, message: "Username already exists" });
    }

    const findPlayer2 = await Player.findOne({
      where: {
        email,
      },
    });

    if (findPlayer2 !== null) {
      return res
        .status(200)
        .json({ errorCode: 0.1, message: "email already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create new user/player
    const newUser = await Player.create({
      username,
      email,
      password: hashedPassword,
      balance: 0,
    });

    // Create JSON Web Token
    const accessToken = await jwt.sign(
      { username: username, email: email },
      String(process.env.SECRET_CODE)
    );

    return res.status(200).json({
      message: "User created",
      accessToken: accessToken,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      errorCode: 1,
      message: "error",
    });
  }
};

module.exports = {
  playerLogin,
  playerRegister,
};
