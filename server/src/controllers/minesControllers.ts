import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { where } from "sequelize/types";
const spawn = require("child_process").spawn;

const Player = require("../models/player");

const minesRandomizer = async (req: Request, res: Response) => {
  try {
    const { minesTotal } = req.body;

    // activate python script
    const childPython = spawn(
      "python3",
      ["./python_scripts/minesRandomizer.py", minesTotal],
      { shell: true }
    );

    let arr: number[][] = [];

    // when python script done recieve answer
    childPython.stdout.on("data", (data: any) => {
      arr = JSON.parse(data);

      return res.json({ randomizedPlayboard: arr });
    });

    childPython.stderr.on("data", (data: any) => {
      console.log(data.toString());
    });
  } catch (error) {
    return res.status(400).json({ message: "error" });
  }
};

const minesBet = async (req: Request, res: Response) => {
  try {
    const { completeNewBalance } = req.body;

    const userId: number = req.body.userInfo.id;

    const changeBet: Object = await Player.update(
      { balance: Number(completeNewBalance) },
      { where: { id: userId } }
    );

    return res.status(200).json({ userId, completeNewBalance });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Error" });
  }
};

module.exports = {
  minesRandomizer,
  minesBet,
};
