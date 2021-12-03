
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app =express();

dotenv.config({ path:'./config.env'});
require('./db/conn');
// const User = require('./models/userSchema');

app.use(express.json());
app.use(require('./router/auth'));

const PORT = process.env.PORT;






const middleware = ( req,res,next) => {

    console.log(`Hello my Middleware`);
    next();
}
app.get('/',(req,res) =>{

    res.send(`Hello world from the server`);
    // next();
});

app.get('/about', middleware, (req,res) =>{
    console.log(`Hello Everyone`);
    res.send(`Hello about from the server`);
});

app.get('/contact',(req,res) =>{

    res.send(`Hello contact from the server`);
});


app.get('/singin',(req,res) =>{

    res.send(`Hello contact from the server`);
});

app.get('/singup',(req,res) =>{

    res.send(`Hello contact from the server`);
});


app.listen(PORT, () => {

    console.log(`Server is running at port no ${PORT}`);
});