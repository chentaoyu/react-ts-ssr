const path = require("path");

module.exports = {
  entry: "./src/App.tsx",
  output: {
    path: path.resolve(__dirname,
      "lib"),
    filename: "App.js"
  },
  module: {
    rules: [
      { 
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] },
      {
        test: /\.tsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript"
            ]
          }
        }
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  plugins: []
};