import path from 'path';

export default{
  debug: true,        //enables some debugging info as you run your build
  devtool: 'inline-source-map',    // there are a number of devtools which consider compilations vs quality
  noInfo: false,    //setting this to false tells webpack to display a list of the project files that it's bundling. Should normally turn off during production to prevent the noise that comes with it
  entry: [
    path.resolve(__dirname, 'src/index')
  ],     //this defines the entry point of the application. The entry point here is defined as src/index and I use the magic global __dirname(which is part of node so that I make sure that I get the ful path here) and I use the path package that comes with node to get this done. NOTE: you can pass webpack in an array of entry points. This is also a good way to inject hot reloading
  target: 'web',       //this app is targeting the web. But you can use this to target other environments like electron or node(if using webpack for building an app that runs in node) from here.
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },        //NOTE: webpack doesn't create physical files in the file directory, but creates and simulates a physical file directory in the memory and serves it to the browser. Creating the path and name will simulate the physical file's existence. We use node's __dirname variable to get the current directory and specify that our app will ultimately run from the source folder. This bundle or filename has been named bundle.js
  plugins: [],  //here we can define an array of plugins that help enhance webpack's powe e.g. hot reloading, catching errors, linting styles, etc
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']}, //telling webpack to handle js
      {test: /\.css$/, loaders: ['style', 'css']} //telling webpack to handle css
    ]
  }    //this section tells webpack  the types of files you need it to handle.  Webpack calls this concept loaders. Loaders teach Webpack how to handle different file types. Other loaders that can be added include: SASS, LESS, images, etc. When you add a loader to be handled by Webpack, it simply means that you can import those file types at the top of your JS file and Webpack will intelligently bundle the files for you.
}
