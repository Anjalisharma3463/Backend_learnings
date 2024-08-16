
// Models are basically objects or is a part of your code that is responsible for representing your data

// in your code and allowing you to work with your data,

// so things like saving data, fetching data to or from a file or even if it's just in memory as we're currently

// doing it,





// The views are responsible for what the user sees in the end,

// they are responsible for rendering the right content in our html documents and sending that back

// to the user,

// so they are decoupled from your application code and are just having some light or minor integrations

// regarding the data we inject into our templating engine to generate these views.




// controllers

// are now the connection point between the models and your views

// because since the views shouldn't care about the application logic and the models do care about how

// to save and fetch data and so on, the controllers are the thing working with the models, saving that data

// or triggering that save process and so on..
// or triggering that save process and so on

// and also the part where they then pass that data that was fetched to your views for example.

// So the controller is the middleman, it contains the in-between logic.


// the controller is then the thing defining with which model to work and which view to render.
// Now in case you're also wondering how routes fit into this picture,

// well routes are basically the things which define upon which path for which http method which controller

// code should execute.

const path = require('path');



const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
