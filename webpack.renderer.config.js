const webpack = require("webpack");
const rules = require("./webpack.rules");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

rules.push({
  test: /\.css$/,
  use: [{ loader: "style-loader" }, { loader: "css-loader" }],
});

const mode = process.env.NODE_ENV || "development";

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "public"),
          to: path.resolve(__dirname, ".webpack/renderer"),
        },
      ],
    }),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(mode),
    }),
  ],
};
