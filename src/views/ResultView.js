import View from "./View.js";
import defaultImage from "../images/default-image.jpg";
import "./ResultView.scss";

export default class ResultView extends View {
  constructor(el) {
    super(el);

    this.messages = {
      NO_RESULT: "검색 결과가 없습니다"
    };
  }

  mount(data = []) {
    this.el.innerHTML = `<div class="ResultView">
      ${data.length ? this.getSearchResultsHtml(data) : this.messages.NO_RESULT}
    </div>`;
    this.show();
  }

  getSearchResultsHtml(data) {
    return (
      data.reduce((html, item) => {
        html += this.getSearchItemHtml(item);
        return html;
      }, "<ul>") + "</ul>"
    );
  }

  getSearchItemHtml(item) {
    return `<li>
      <img src="${item.image}" onerror="this.src='${defaultImage}'"/>
      <p>${item.name}</p>
    </li>`;
  }
}
