const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: { main: './src/index.js', components: './src/aframeComponents.js' },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name]-bundle.js',
  },
  mode: 'development',
  target: 'web',
  devtool: 'inline-source-map',
  devServer: {
    allowedHosts: 'auto',
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()],
};
