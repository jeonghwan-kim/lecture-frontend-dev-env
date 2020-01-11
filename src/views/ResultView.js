import View from "./View.js";

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
      <img src="${item.image}" onerror="this.src='src/images/default-image.jpg'"/>
      <p>${item.name}</p>
    </li>`;
  }
}
