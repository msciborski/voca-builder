const HtmlWebPackPlugin = require("html-webpack-plugin");
const ChromeExtensionReloader  = require('webpack-chrome-extension-reloader');

module.exports = {
  mode: 'development',
  watch: 'true',
  entry: {
    background: './src/background.js',
    'content-script': './src/contextMenuAction.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new ChromeExtensionReloader({
      port: 9090, // Which port use to create the server
      reloadPage: true, // Force the reload of the page also
      entries: { // The entries used for the content/background scripts
        background: 'background', // *REQUIRED
        contentScript: 'content-script'
      }
    })
  ]
};