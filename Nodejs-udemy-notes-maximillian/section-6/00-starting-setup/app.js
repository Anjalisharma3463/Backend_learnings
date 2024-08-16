
// Now that the core basics about nodejs and expressjs are set,

// it's time that we work more on what the user sees because ultimately, we obviously want to build an application

// which delivers some value to our users, right? Now

// thus far we're always returning static html pages and typically this is not what you do in real applications

// because you don't just have static html code

// most of the time, instead it is pretty common that you have some data managed on your server,

// later we will also do that in a database, that you have some data on your server which you want to

// dynamically output in the html code you send back to your users.

// An example would be a page with a list of products

// where these products of course are coming from your database,

// so from your server. Or for example, we already have a very simple form where people can submit a new

// product title,

// well right now we're not really doing anything with that, in a real application

// you would obviously want to store that and then kind of return it in some other page where you have

// that list of products I already mentioned.

// So in this module, we will have a first look at how we can start managing data on a node express backend,

// for now without a database,

// no worries there will be a very extensive module about the databases in this course so you will learn

// how to interact with a database too

// but for now, let's just manage data like this and let's focus on something else here, on rendering dynamic,

// for now dummy content in our views.

// So these html pages which we're returning should now become more dynamic and actually contain some content

// that is dynamically entered into them on the server, so that if we had additional data on the server,

// we would send back a different html page with different content.

// And for this, we'll use something called a templating engine and you will learn how such templating engines,

// there is more than one alternative

// and I will present some alternatives in this module,

// you'll learn how they work and how you can use them.

// So this is what's in this module

// and with that, let's dive right into it and let's have a look at how we could manage that data before

// we then have a look at how we could output it.

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);

//EJS , PUG(JADE) , HANDLEBARS  are the template engines....

// EJS-->  <p> <%= name %></p>  --> use normal html and plain js in your templates
// pug-->  p #{name} --> use minimal html and custom templage language.
// handelbars <p>{{name}} </p> ---> use normal htm land custom template languge



//installing these template engines::
// npm install --save ejs pug express-handlebars
