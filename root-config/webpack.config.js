const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { writeFileSync } = require('fs');

module.exports = (webpackConfigEnv, argv, context) => {
  const orgName = "cristian";

  // TODO: We might want to customize/override this instead of using those defaults
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  const finalConfig = merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        scriptLoading: 'module',
        template: "src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName,
        },
      }),
    ],
    output: {
      libraryTarget: 'module',
    },
    experiments: {
      outputModule: true,
    },
  });

  finalConfig.plugins = finalConfig.plugins.filter(plugin => !plugin.options || !plugin.options.hasOwnProperty('systemjsModuleName'))

  delete finalConfig.externals;
  // finalConfig.externals = {
  //     // constants: 'module constants',
  // }

  writeFileSync('root-config-single-spa-webpack.config.json', JSON.stringify(finalConfig, null, 2));

  return finalConfig
};
