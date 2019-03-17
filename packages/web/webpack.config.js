const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");

const config = {
  entry: "./webEntry.js",
  output: {
    path: __dirname + "/build",
    publicPath: "/",
  },

  resolve: {
    alias: {
      "@jonthompson/renaweexlebo-common": path.resolve(
        __dirname,
        "../common/src$"
      ),
      "react-native$": __dirname + "/node_modules/react-native-web",
      "react-art": __dirname + "/node_modules/react-art",
      react: __dirname + "/node_modules/react",
      "react-dom": __dirname + "/node_modules/react-dom",
      "styled-components": __dirname + "/node_modules/styled-components",
    },
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  mode: "development",

  node: {
    dgram: "empty",
    fs: "empty",
    net: "empty",
    tls: "empty",
    child_process: "empty",
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "App",
      template: "index.html",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              [
                "module-resolver",
                {
                  root: ["./"],
                  alias: {
                    "@jonthompson/renaweexlebo-common": "../common/src",
                  },
                },
              ],
            ],
          },
        },
      },
    ],
  },

  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 9000,
  },
};

module.exports = config;
