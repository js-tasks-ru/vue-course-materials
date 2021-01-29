const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',

  entry: './src/main.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  devtool: 'inline-source-map',

  devServer: {
    contentBase: './dist',
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: ['vue-loader'],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),

    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new VueLoaderPlugin(),
  ],
};
