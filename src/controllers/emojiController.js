const { getEmojis } = require("../services/emojiService");

async function getEmojisHandler(req, res) {
  try {
    const { search, page, limit } = req.query;
    const result = getEmojis({ search, page, limit });
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

module.exports = { getEmojisHandler };
