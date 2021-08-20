"use strict";

var express = require("express");

var app = express();
var port = process.env.PORT || 3000;

var cookieParser = require('cookie-parser');

app.use(express.json());
app.use(express["static"]('public'));
app.use(express["static"]('public/dist')); //I use this to read the cookie (I can create it with out this)

app.use(cookieParser()); //Route (I import the routes of users and surveys)

var userRoutes = require('./routes/userRoutes'); //Use of that Routes that I imported


app.use('/user', userRoutes);
app.listen(port, function () {
  console.log("Listening on port: ".concat(port));
});