const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public'))); // it will auto react to find files in public so we will pass the path after public only in html fles.

app.use('/admin', adminRoutes);
// in middleware;  This is a crucial point you have to understand, that you should always call next unless you are sending

// a response in which case you should never call next
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);

// ***# When you're using Express.js to serve HTML, CSS, or other static files like images, you need to explicitly tell Express to serve these files from a specific directory. Otherwise, the files won't be accessible to the public and won't show up when you inspect the page in the browser's developer tools


// to get access for css file in inspect or publicallly  => expressjs offers us, we need to be able to serve files statically and statically simply means not handled

// by the express router or other middleware but instead directly forwarded to the file system.


