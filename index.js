const express = require("express");
const emojis = require("./data/emojis");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

function getEmojis({ search, page, limit }) {
  let filteredEmojis = [...emojis];

  if (search) {
    filteredEmojis = emojis.filter(
      (emoji) =>
        emoji.title.toLowerCase().includes(search.toLowerCase()) ||
        emoji.keywords.toLowerCase().includes(search.toLowerCase())
    );
  }

  const limitNum = parseInt(limit) || 12;
  const pageNum = parseInt(page) || 1;

  const totalPages = Math.ceil(filteredEmojis.length / limitNum);

  const startIndex = limitNum * (pageNum - 1);
  const endIndex = limitNum * pageNum;

  const data = filteredEmojis.slice(startIndex, endIndex);

  const responseData = {
    data,
    totalPages,
    page: pageNum,
    limit: limitNum,
  };

  return responseData;
}

async function getEmojisHandler(req, res) {
  try {
    const { search, page, limit } = req.query;

    const result = getEmojis({ search, page, limit });

    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

app.get("/api/emoji", getEmojisHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
