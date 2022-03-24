require("@babel/register");

const webpackConfig = Object.assign({}, require("./demo/webpack.config.babel"));

module.exports = function(config) {
  config.set({
    singleRun: true,
    frameworks: ["webpack", "mocha"],
    plugins: [
      "karma-webpack",
      "karma-mocha",
      "karma-sourcemap-loader",
      "karma-firefox-launcher",
      "karma-phantomjs-launcher"
    ],
    basePath: "./",

    files: [
      { pattern: "node_modules/@babel/polyfill/browser.js", instrument: false },
      "./src/**/*.test.js"
    ],

    autoWatch: true,

    preprocessors: {
      "./src/**/*.test.js": ["webpack", "sourcemap"]
    },

    webpack: webpackConfig,

    reporters: "dots",

    browsers: [process.env.CI ? "PhantomJS" : "Firefox"]
  });
};
