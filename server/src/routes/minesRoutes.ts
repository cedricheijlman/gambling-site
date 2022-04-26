import express, { Request, Response } from "express";
import authMiddelware from "../middleware/authMiddelware";
const router = express.Router();
const {
  minesRandomizer,
  minesBet,
} = require("../controllers/minesControllers");

router.post("/minesRandomizer", authMiddelware, minesRandomizer);

router.post("/minesBet", authMiddelware, minesBet);

module.exports = router;
