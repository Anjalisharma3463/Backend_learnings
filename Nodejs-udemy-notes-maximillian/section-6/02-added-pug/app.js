const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// I already mentioned at the beginning of this module that for putting dynamic content into our html
app.set('view engine', 'pug');
// So now we're telling express that we want to compile dynamic templates with the pug engine and where

// to find these templates.
app.set('views', 'views');
// View engine allows us to tell express hey for any dynamic templates we're trying to render and there

// will be a special function for doing that,

// please use this engine we're registering here and views allows us to tell express where to find these dynamic.

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
