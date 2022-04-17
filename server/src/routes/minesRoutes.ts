import express, { Request, Response } from "express";
const router = express.Router();
const { minesRandomizer } = require("../controllers/minesControllers");

router.post("/minesRandomizer", minesRandomizer);

module.exports = router;
