var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
module.exports = {
  context: __dirname,
  entry: './assets/js/index', // !!!!entry point of our app. assets/js/index.js!!!
  output: {
      path: path.resolve('./assets/bundles/'), // !!!!location of webpack bundles!!!
      filename: "[name]-[hash].js",
  },
  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
    new webpack.ProvidePlugin({ 
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery' 
        }) // !!!!Allows jquery to be used!!!
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, 
	exclude: /node_modules/, 
	loader: 'babel-loader',
	query: {
		presets: ['react']
	}, // !!!!tells babel it will be working with react to read jsx!!!
	}
    ],
  },
  resolve: {
    modules: ['node_modules',],
    extensions: ['.js', '.jsx']
  },
}