import { Request, Response } from "express";

const verifyUserToken = async (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "worked" });
  } catch (error) {
    res.status(400).json({ message: "Doesn't work" });
  }
};

module.exports = {
  verifyUserToken,
};
