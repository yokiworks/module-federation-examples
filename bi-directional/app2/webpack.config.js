const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
// const AutomaticVendorFederation = require('@module-federation/propriatery-tools/packages/automatic-vendor-federation-plugin')
//
// const pkgJson = require('./package.json')
// const exclude = ['babel','plugin','preset','webpack','loader','serve','@module-federation/propriatery-tools']
// const ignoreVersion = ['react','react-dom']
module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3002,
  },
  output: {
    // publicPath: "http://localhost:3002/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
// new ModuleFederationPlugin({
//   name: "app2",
//   library: { type: "var", name: "app2" },
//   filename: "remoteEntry.js",
//   remotes: {
//     app1: "app1",
//   },
//   exposes: {
//     Button: "./src/Button",
//   },
//   shared: AutomaticVendorFederation(exclude,ignoreVersion,pkgJson)
// }),
