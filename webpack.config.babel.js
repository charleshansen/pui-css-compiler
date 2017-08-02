import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  entry: './index.js',
  output: {filename: 'app.js', publicPath: '/'},
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: [/\.eot(\?|$)/, /\.ttf(\?|$)/, /\.woff2?(\?|$)/, /\.png(\?|$)/, /\.gif(\?|$)/, /\.jpe?g(\?|$)/],
        exclude: /node_modules/,
        use: {loader: 'url-loader?name=[name]-[hash].[ext]'}
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader']
        })
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('components.css'),
  ],
};