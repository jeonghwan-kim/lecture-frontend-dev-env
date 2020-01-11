import MainController from "./controllers/MainController.js";

// TODO: app.css 파일이 사라졌습니다. 이제는 app.scss를 불러올수 있도록 웹팩 구성을 추가하세요.
import "./app.scss";

document.addEventListener("DOMContentLoaded", () => {
  new MainController();
});
