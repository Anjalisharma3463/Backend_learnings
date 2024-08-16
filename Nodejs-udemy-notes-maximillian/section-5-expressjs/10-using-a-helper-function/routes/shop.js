const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
// rooDir will lead to root folder of the project folder 
const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
