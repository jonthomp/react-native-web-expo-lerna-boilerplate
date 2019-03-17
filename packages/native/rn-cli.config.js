var path = require("path");
var config = {
  projectRoot: path.resolve(__dirname),
  watchFolders: [path.resolve(__dirname, "../common/src")],
  resolver: {
    extraNodeModules: {
      "@jonthompson/renaweexlebo-common": path.resolve(
        __dirname,
        "../common/src"
      ),
      react: path.resolve(__dirname, "node_modules/react"),
      "react-native": path.resolve(__dirname, "node_modules/react-native"),
      "@babel/runtime": path.resolve(__dirname, "node_modules/@babel/runtime"),
      "styled-components": path.resolve(
        __dirname,
        "node_modules/styled-components"
      ),
    },
  },
};
module.exports = config;
