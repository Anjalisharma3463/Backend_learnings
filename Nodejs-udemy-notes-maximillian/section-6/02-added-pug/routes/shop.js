const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('shop');  //this is provided by expressjs and it will use the default templating engine which is why we had
  // We also don't need shop.pug because we defined pug as the default templating engine
  // And now we defined that all the views are in the views folder,
});

module.exports = router;

// We're rendering our shop template but we're not rendering any dynamic content,
// By the way if you only change something in the template

// as I just did,

// you don't need to restart the server and node one will not do so because the templates are not part of

// your server side code,

// they are basically just templates which are picked up on the fly anyways

// so if you change them for the next request that's coming, they will automatically take that new version

// already.