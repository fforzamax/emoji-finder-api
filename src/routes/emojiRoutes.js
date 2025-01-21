const express = require("express");
const { getEmojisHandler } = require("../controllers/emojiController.js");

const emojiRouter = express.Router();

emojiRouter.use("/", getEmojisHandler);

module.exports = { emojiRouter };
