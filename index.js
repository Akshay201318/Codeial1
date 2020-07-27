//importing express to this project
const express = require('express');

//importing cookie parser
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;

//importing database
const db = require('./config/mongoose');

// importing the layout library
const expressLayout = require('express-ejs-layouts');

// Middlewheres
app.use(express.urlencoded());
app.use(cookieParser());


// using static files
app.use(express.static('./static'));

//extracting styles and script files from pages

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


// using layouts

app.use(expressLayout);

// Using express router

app.use('/', require('./routs'));

// Setting the view engine

app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port, function (err)
{
    if (err)
    {
        console.log(`Error in creating the server ${err}`);
        return;
    }
    console.log(`Server is running on port:${port}`);
})