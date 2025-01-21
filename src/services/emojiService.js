const emojis = require("../data/emojis.js");

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

module.exports = {
  getEmojis,
};
