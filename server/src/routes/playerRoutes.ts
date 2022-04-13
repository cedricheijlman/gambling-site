import express, { Request, Response } from "express";
const { playerLogin } = require("../controllers/playerControllers");

const router = express.Router();

router.get("/hello", playerLogin);

module.exports = router;
