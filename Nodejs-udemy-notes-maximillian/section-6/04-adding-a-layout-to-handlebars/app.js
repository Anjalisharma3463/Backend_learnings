const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');
// We do this by calling app and now there is an engine method and this registers a new templating engine

// in case we're using one which is not built-in, pug was built-in kind of, express handlebars is not.
const app = express();

app.engine(
  'hbs', // hbs is a name of the engine that we gave and second output will be epressHbs() like this app.engine(hbs , expressHbs() that is tool or engine) -->so this function returns the initialised view engine which we can assign to engine here.
  expressHbs({
    layoutsDir: 'views/layouts/',
    defaultLayout: 'main-layout',
    extname: 'hbs'
  })
);
app.set('view engine', 'hbs'); // pub was at the place of hbs here .so what we wrill write here . well use it as an extension file like app.hbs or app.pug
app.set('views', 'views'); // well use pug or hbs k ifiles in views folders.

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000);
// npm install --save express-handlebars@3.0