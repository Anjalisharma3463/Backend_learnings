
// This is just html code that is generated on the fly but also on the server. This is not code

// that would be generated in the browser,

// it's generated on the server, on demand for the request you're getting. And templating engines also do some

// advanced stuff like caching some built templates for you if the data input didn't change, so that they

// can return the template even faster and don't have to rebuild it for every request even if the data

// didn't change.

const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product', { // We do render a template with the special render method provided by expressjs, that render method will   always look for the registered view engine, something we do here at the beginning in app.js. We do register

     pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
