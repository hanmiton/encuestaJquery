#!/usr/bin/env node

var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var morgan = require('morgan');
var mongoose = require('mongoose');

app.use(morgan('dev')); 
/*
 * Serve static content.
 */

//http://localhost:80/api/ users
//mongoose.connect('mongodb://localhost :27017/tutorial', function(err){
db = mongoose.connect('mongodb://localhost:27017/encuesta', function(err){
//mongoose.connect('mongodb://node:node@ds023644.mlab.com:23644/hanmilton',function(err){

	if(err){
		console.log('Not Connected to the database: ' + err);
	}
	else{
		console.log('Successfully connected to MongoDB');
	}
});


app.use('/', express.static(__dirname + '/static')); 

var server = app.listen(5000, function () {
  console.log('Listening on localhost:5000');
});
