import { Request, Response } from "express";
const spawn = require("child_process").spawn;

const minesRandomizer = async (req: Request, res: Response) => {
  try {
    const { minesTotal } = req.body;

    // activate python script
    const childPython = spawn("python", [
      "./python_scripts/minesRandomizer.py",
      minesTotal,
    ]);

    let arr: number[][] = [];

    // when python script done recieve answer
    childPython.stdout.on("data", (data: any) => {
      arr = JSON.parse(data);
      return res.json({ randomizedPlayboard: arr });
    });
  } catch (error) {
    res.status(400).json({ message: "error" });
  }
};
module.exports = {
  minesRandomizer,
};
