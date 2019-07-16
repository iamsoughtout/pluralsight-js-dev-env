//used to configure the web server that will serve up the files in our source directory


var express = require('express');     //call express
var path = require('path');         //need a reference to path
var open = require("open");         //reference to open, which we'll use to open our site in the browser

var port = 4000;    //set a variable that stores the port
var app = express();      //creating an instance of express and set to variable app


//let's tell express which route it should handle
app.get('/', function(req, res){    //any references to the root ('/') should be handled by this function which takes a request and response
  res.sendFile(path.join(__dirname, '../src/index.html'));        //calling res.sendFile and using path to join the directory name(__dirname) that we are currently running in to the path to the src directory; where it will find index.html file
});


//telling express to listen to the port we defined above
app.listen(port, function(err) {
  if(err) {                   //if error, show error
    console.log(err);
  } else{
    open('http://localhost:' + port);   //else, open up the website via the address by hitting the port
  }
})
