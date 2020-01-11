import View from "./View.js";

import "./TabView.scss";

export default class TabView extends View {
  constructor(el) {
    super(el);

    this.mount();
    this.bindEvents();
  }

  mount() {
    this.el.innerHTML = `<ul class="TabView">
      <li>추천 검색어</li>
      <li>최근 검색어</li>
    </ul>`;
  }

  get tabItems() {
    return Array.from(this.el.children[0].children);
  }

  bindEvents() {
    this.tabItems.forEach(li => {
      li.addEventListener("click", () => this.onClick(li.innerHTML));
    });
  }

  onClick(tabName) {
    this.setActiveTab(tabName);
    this.emit("@change", { tabName });
  }

  setActiveTab(tabName) {
    this.tabItems.forEach(li => {
      li.className = li.innerHTML === tabName ? "active" : "";
    });
    this.show();
  }
}
