const path = require("path");

module.exports = {
  productionSourceMap: false,
  outputDir: path.resolve(__dirname, "./dist/public"),
  devServer: {
    proxy: "https://api.stelo.finance",
  },
};
