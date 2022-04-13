import express, { Request, Response } from "express";
const {
  playerLogin,
  playerRegister,
} = require("../controllers/playerControllers");

const router = express.Router();

router.get("/login", playerLogin);
router.get("/register", playerRegister);

module.exports = router;
