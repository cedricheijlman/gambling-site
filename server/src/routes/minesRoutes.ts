import express, { Request, Response } from "express";
const router = express.Router();
const {
  minesRandomizer,
  minesBet,
} = require("../controllers/minesControllers");

router.post("/minesRandomizer", minesRandomizer);

router.post("/minesBet", minesBet);

module.exports = router;
