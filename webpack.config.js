const path = require("path"); //es6 모듈문법이 아닌 common.js인 모듈시스템

module.exports = {
  //es6 모듈문법이 아닌 common.js인 모듈시스템
  mode: "development",
  entry: {
    //시작점
    main: "./src/app.js"
  },
  output: {
    filename: "[name].js", //빌드 결과물 이름(name: main.js)
    path: path.resolve("./dist") //빌드 결과물 경로(resolve:절대경로를 구해주는 함수)
  },
};
