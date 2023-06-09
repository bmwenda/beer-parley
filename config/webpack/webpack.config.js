const { webpackConfig, inliningCss } = require('shakapacker');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const DotEnv = require('dotenv-webpack');

const isDevelopment = process.env.NODE_ENV !== 'production';

if (isDevelopment && inliningCss) {
  webpackConfig.plugins.push(
    new ReactRefreshWebpackPlugin({
      overlay: {
        sockPort: webpackConfig.devServer.port,
      },
    }),
  );
}

webpackConfig.plugins.push(new DotEnv());

module.exports = webpackConfig;
