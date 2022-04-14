import express, { Request, Response } from "express";
const {
  playerLogin,
  playerRegister,
} = require("../controllers/playerControllers");

const router = express.Router();

router.post("/login", playerLogin);
router.post("/register", playerRegister);

module.exports = router;
