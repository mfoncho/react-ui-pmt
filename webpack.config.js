process.env.NODE_ENV = "development";

var debug = process.env.NODE_ENV !== "production"

var webpack = require('C:/Users/MC-A/AppData/Roaming/npm/node_modules/webpack');

console.log("Environment => ", process.env.NODE_ENV , "\n");

console.log("Debuger => ", debug, "\n");

module.exports = {
	context: __dirname,
	devtool: debug ? "inline-source-map" : null,
	entry: "./src/app/main.js",
	output: {
		path: __dirname + "/src",
		filename: "app.bundle.dev.js"
	},
	module: {
	    loaders: [
	      	{
	        test: /\.jsx?$/,
	        exclude: /(node_modules|bower_components)/,
	        loader: 'babel-loader',
	        query: {
	          presets: ['react', 'es2015', 'stage-0'],
	          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
	        	}
	      	}
	    ]
  	},
	plugins : debug ? [] : [
	    new webpack.optimize.DedupePlugin(),
	    new webpack.optimize.OccurenceOrderPlugin(),
	    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
	  ],

    externals: {
        "jquery": "jQuery"
    }
}
