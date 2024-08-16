const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

// but especially as our application grows if you put everything into your route files, this can quickly

// become a very big file and therefore separating this into separate files can be a good idea because

// you can then quickly see which routes you have and if you want to see the code which executes per route,

// you simply go into the respective controller file and function.
router.get('/', (req, res, next) => {
  // that is the typical controller logic, we're interacting with our data even though that's just one line
  const products = adminData.products; // data
  //view
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
});

module.exports = router;
 