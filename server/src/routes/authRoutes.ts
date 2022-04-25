import express from "express";
const router = express.Router();
const { verifyUserToken } = require("../controllers/authControllers");

router.post("/verifyUser", verifyUserToken);

module.exports = router;
