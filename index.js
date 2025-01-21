const express = require("express");
const { emojiRouter } = require("./routes/emojiRoutes");
const app = express();
const port = 3000;

app.get("/api/emoji", emojiRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
