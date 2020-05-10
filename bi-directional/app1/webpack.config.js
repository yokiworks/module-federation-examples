const HtmlWebpackPlugin = require("html-webpack-plugin");
// const {ModuleFederationPlugin} = require("webpack").container
const path = require("path");
// const AutomaticVendorFederation = require('@module-federation/propriatery-tools/packages/automatic-vendor-federation-plugin')

// const pkgJson = require('./package.json')
// const exclude = ['babel','plugin','preset','webpack','loader','serve','@module-federation/propriatery-tools']
// const ignoreVersion = ['react','react-dom']
module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3001,
  },
  output: {
    // publicPath: "http://localhost:3001/",
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
//   name: "app1",
//   library: { type: "var", name: "app1" },
//   filename: "remoteEntry.js",
//   remotes: {
//     app2: "app2",
//   },
//   exposes: {
//     Button: "./src/Button",
//   },
//   // sharing code based on the installed version, to allow for multiple vendors with different versions
//   shared: AutomaticVendorFederation(exclude,ignoreVersion,pkgJson)
// }),
