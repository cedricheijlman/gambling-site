import express, { Request, Response } from "express";
const {
  playerLogin,
  playerRegister,
  claimWelcomeBonus,
} = require("../controllers/playerControllers");

const router = express.Router();

router.post("/login", playerLogin);
router.post("/register", playerRegister);
router.post("/claimBonus", claimWelcomeBonus);

module.exports = router;
