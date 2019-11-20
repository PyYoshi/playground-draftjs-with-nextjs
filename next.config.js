const withCSS = require("@zeit/next-css");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = withCSS({
  devIndicators: {
    autoPrerender: false
  },
  webpack(config, options) {
    // https://github.com/PabloSzx/Next-TypeScript-Paths/blob/master/package.json
    if (config.resolve.plugins) {
      config.resolve.plugins.push(new TsconfigPathsPlugin());
    } else {
      config.resolve.plugins = [new TsconfigPathsPlugin()];
    }

    return config;
  }
});
