const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});
// dirname points to whole project folder or the folder in which we are writing this line..
// views to particual folder.
// This is a global variable which simply holds the absolute path on our operating system  to this project folder. 
app.listen(3000);

// why path ?

// coz on linuxfile system is like this : /user/html in fuile manager but in window its like: \user\html....
// so dit can work on easy system so we use path that will auto generate file or url.
// so path.join() detects the operating system that program runnng on and then basicially create the path.


// In the next lecture, we'll write this code:

// module.exports = path.dirname(process.mainModule.filename);
// (I explain why we write this code in the next lecture when we write it!)

// The important thing is that you might get a deprecation warning for that code - in that case, you can simply switch to this code:

// module.exports = path.dirname(require.main.filename);
// Quite straightforward :)