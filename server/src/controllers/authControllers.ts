import { Request, Response } from "express";
import jwt from "jsonwebtoken";
const Player = require("../models/player");

const verifyUserToken = async (req: Request, res: Response) => {
  try {
    const authHeader = req.headers.authorization;

    if (authHeader) {
      const token: string | number = authHeader.split(" ")[1];

      jwt.verify(
        token,
        String(process.env.SECRET_CODE),
        async (err: any, user: any) => {
          if (err) {
            return res.status(403).json("Token is not valid");
          }

          const findUser: any = await Player.findOne({
            where: {
              id: user.id,
            },
          });

          if (!findUser) {
            return res.status(400).json("Error");
          }

          return res
            .status(200)
            .json({
              username: findUser.dataValues?.username,
              balance: findUser.dataValues?.balance,
              user,
            });
        }
      );
    }
  } catch (error) {
    return res.status(400).json({ message: "Doesn't work" });
  }
};

module.exports = {
  verifyUserToken,
};
