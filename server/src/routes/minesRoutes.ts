import express, { Request, Response } from "express";
const router = express.Router();
const { minesRandomizer } = require("../controllers/minesControllers");

router.post("/mines", minesRandomizer);

module.exports = router;
