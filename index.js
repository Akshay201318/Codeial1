const express = require('express');
const app = express();
const port = 8000;

// importing the layout library

const expressLayout = require('express-ejs-layouts');

// importing static files

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