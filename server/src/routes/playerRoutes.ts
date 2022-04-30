import express, { Request, Response } from "express";
import authMiddelware from "../middleware/authMiddelware";
const {
  playerLogin,
  playerRegister,
  claimWelcomeBonus,
  depositWallet,
} = require("../controllers/playerControllers");

const router = express.Router();

router.post("/login", playerLogin);
router.post("/register", playerRegister);
router.post("/claimBonus", authMiddelware, claimWelcomeBonus);
router.post("/depositWallet", authMiddelware, depositWallet);

module.exports = router;
