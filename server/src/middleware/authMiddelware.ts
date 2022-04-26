import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const authMiddelware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (authHeader) {
      const token: string | number = authHeader.split(" ")[1];

      jwt.verify(token, String(process.env.SECRET_CODE), (err, user) => {
        if (err) {
          return res.status(403).json("Token is not valid");
        }
        req.body.userInfo = user;

        next();
      });
    }
  } catch (error) {
    res.status(400).json({ message: "Error" });
  }
};

export default authMiddelware;
