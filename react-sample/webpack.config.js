const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist")
  },
  devServer: {
    overlay: true,
    stats: "errors-only",
    // TODO: react-hot-loader를 사용하도록 구성하세요.
  },
  module: {
    rules: [
      // TODO: js(리액트 코드 포함)와 css 파일 변환을 위한 로더를 구성하세요 
    ]
  },
};
