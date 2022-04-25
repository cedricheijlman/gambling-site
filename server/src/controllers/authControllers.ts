import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const verifyUserToken = async (req: Request, res: Response) => {
  try {
    const authHeader = req.headers.authorization;

    if (authHeader) {
      const token: string | number = authHeader.split(" ")[1];

      jwt.verify(token, String(process.env.SECRET_CODE), (err, user) => {
        if (err) {
          return res.status(403).json("Token is not valid");
        }

        return res.status(200).json(user);
      });
    }
  } catch (error) {
    res.status(400).json({ message: "Doesn't work" });
  }
};

module.exports = {
  verifyUserToken,
};
