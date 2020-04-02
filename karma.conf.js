/* eslint-disable import/order */
const webpackConfig = require('./webpack.config');

delete webpackConfig.entry;

module.exports = config => {
  config.set({
    browsers: ['ChromeHeadless'],
    frameworks: ['mocha', 'snapshot', 'mocha-snapshot'],
    reporters: ['mocha'],
    files: ['test/index.ts'],
    preprocessors: {
      '__snapshots__/**/*.md': ['snapshot'],
      'test/index.ts': ['webpack'],
    },
    mime: {
      'text/x-typescript': ['ts', 'tsx'],
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
    },
    logLevel: 'debug',
  });
};
