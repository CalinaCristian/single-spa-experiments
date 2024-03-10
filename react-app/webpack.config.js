const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  /** 
   * TODO: We might want to customize/override this instead of using those defaults
   * 
   * https://github.com/single-spa/create-single-spa/blob/main/packages/webpack-config-single-spa-react/lib/webpack-config-single-spa-react.js
   * https://github.com/single-spa/create-single-spa/blob/main/packages/webpack-config-single-spa-ts/lib/webpack-config-single-spa-ts.js
   * https://github.com/single-spa/create-single-spa/blob/main/packages/webpack-config-single-spa/lib/webpack-config-single-spa.js
  */
  const defaultConfig = singleSpaDefaults({
    orgName: "cristian",
    projectName: "react-app",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
  });
};
