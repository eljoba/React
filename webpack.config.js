var path =require("path");
var webpack=require("webpack");
//var ExtractTextPlugin= require('extract-text-webpack-plugin');



var DIST_DIR= path.resolve(__dirname, "dist");
var SRC_DIR= path.resolve(__dirname, "src");

var config={
  entry: SRC_DIR + "/app/index.js",
  output: {
    path: DIST_DIR + "/app",
    filename: "bundle.js",
    publicPath: "/app/"
  },

  devServer: {
      hot: true
    },
  plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ],
  module: {
    loaders: [
      {
      test: /\.js?/,
      include: SRC_DIR,
      loader: 'babel-loader',
      query: {
        presets: ['babel-preset-env','react'],
        plugins: ["react-hot-loader/babel"]
      }
    }
    ]
  }


};

module.exports=config;
