import {resolve} from "node:path";
import HtmlWebPackPlugin from "html-webpack-plugin";

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
});

export default {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
        resolve: {fullySpecified: false}
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  entry: "./source/index.js",
  watch: true,
  output: {
    path: resolve("./build"),
    filename: "bundle.js"
  },
  plugins: [htmlPlugin],
  devServer: {
    port: 3000
  }
};
