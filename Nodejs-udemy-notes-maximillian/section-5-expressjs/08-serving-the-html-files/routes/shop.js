const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});
// __dirname points to the folder n which this file is(where we are writting this line)...
// ../ points to up one level of __dirname so now it points to root foler of the project.
//..   then views folder and then shopt.html
module.exports = router;
