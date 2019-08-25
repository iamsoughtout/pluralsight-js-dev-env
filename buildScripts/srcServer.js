//used to configure the web server that will serve up the files in our source directory


import express from 'express';     //call express
import path from 'path';         //need a reference to path
import open from "open";         //reference to open, which we'll use to open our site in the browser

//below, I am setting up the development server(express) to serve Webpack bundle
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 4000;    //set a variable that stores the port
const app = express();      //creating an instance of express and set to variable app
const compiler = webpack(config) //calling webpack and parsing in config that I created above.

//using app.use to tell express other things that I will like to use
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,     //don't display any info
  publicPath: config.output.publicPath   //I am referencing a variable that I defined in the webpack.config.dev.js file
}));   //telling express to use, webpack-dev-middleware and parse in compiler(which was declared above as const compiler)


//let's tell express which route it should handle
app.get('/', function(req, res){    //any references to the root ('/') should be handled by this function which takes a request and response
  res.sendFile(path.join(__dirname, '../src/index.html'));        //calling res.sendFile and using path to join the directory name(__dirname) that we are currently running in to the path to the src directory; where it will find index.html file
});


//telling express to listen to the port we defined above

/* eslint-disable no-console*/
app.listen(port, function(err) {
  if(err) {                   //if error, show error
    console.log(err);
  } else{
    open('http://localhost:' + port);   //else, open up the website via the address by hitting the port
  }
})
