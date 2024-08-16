const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// npm install --save body-parser
app.use(bodyParser.urlencoded({extended: false})); // it registers a middleware . .. it twill auto called next to reach next middleware. but before that , it will do parse the whole body . thera er different parser for different types of data lke json and more.
//request gives us this body convenience property here but by default, request doesn't try to parse the incoming data orincoming request body. as we did same also in nodejs previous by default like body buffer and more .with data.
// that extended : false;:--- this is if it should be able to parse non-default features 
//so to do that we need to register a parser here . and add another middleware.
app.use('/add-product', (req, res, next) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});


// app.get me when you search direcctly licalhost:/product so its a get request . it will not show anythong coz these is not app.get. but when you came here through add-prodycut then it will work coz then it will be a post request... not get.   a
app.post('/product', (req, res, next) => { // this middle ware will always get execute for post also for gett request.
    console.log(req.body); // js object like {title : book}
    res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
