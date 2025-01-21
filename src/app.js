const express = require("express");
const { emojiRouter } = require("./routes/emojiRoutes");

function createApp() {
  const app = express();

  app.get("/", (req, res) => {
    res.send("Сервер работает");
  });

  app.use("/api/emoji", emojiRouter);

  return app;
}

module.exports = { createApp };
