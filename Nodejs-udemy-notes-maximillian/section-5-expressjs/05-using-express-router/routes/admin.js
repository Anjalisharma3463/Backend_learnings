const express = require('express');
// This router is like a mini express app tied to the other express app or pluggable into the other express app..
//router function will work same as app.use or app.get or app.post does.
const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

router.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
