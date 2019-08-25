//This file isn't transpiled, so must use commonJs and ES5

// telling mocha that first babel should transpile the tests before mocha runs the test . i.e. require babel to transpile before tests run
require('babel-register')();


//Disabling wepack features that mocha doesn't understand
require.extensions['.css'] = function()  {}       // this is telling mocha that if it sees this css extension which although webpack understands but mocha doesnt, it should treat it like an empty function
