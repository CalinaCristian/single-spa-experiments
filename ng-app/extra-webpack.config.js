const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { writeFileSync } = require('fs');
module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);
  writeFileSync('angular-single-spa-webpack.config.json', JSON.stringify(singleSpaWebpackConfig, null, 2));
  // Feel free to modify this webpack config however you'd like to
  return {
    ...singleSpaWebpackConfig,
    experiments: {
      ...singleSpaWebpackConfig.experiments,
      outputModule: true,
    },
    output: {
      ...singleSpaWebpackConfig.output,
      libraryTarget: 'module',
    },
    plugins: [
      ...singleSpaWebpackConfig.plugins,
      new ModuleFederationPlugin({
        name: 'ngApp',
        library: { type: 'module' },
        filename: 'remoteEntry.js',
        exposes: {
          './Module': './src/main.single-spa.ts',
        }
      })
    ]
  };
};
