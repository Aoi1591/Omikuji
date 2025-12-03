const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  const fortunes = ['大吉', '中吉', '小吉', '吉', '凶'];
  const index = Math.floor(Math.random() * fortunes.length);

  res.render('index', {
    title: 'おみくじアプリ',
    fortune: fortunes[index]
  });
});

module.exports = router;
