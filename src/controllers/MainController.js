import FormView from "../views/FormView.js";
import ResultView from "../views/ResultView.js";
import TabView from "../views/TabView.js";
import KeywordView from "../views/KeywordView.js";
import HistoryView from "../views/HistoryView.js";

import SearchModel from "../models/SearchModel.js";
import KeywordModel from "../models/KeywordModel.js";
import HistoryModel from "../models/HistoryModel.js";

export default class MainController {
  constructor() {
    const formViewEl = document.querySelector("form");
    const tabViewEl = document.querySelector("#tabs");
    const keywordViewEl = document.querySelector("#search-keyword");
    const historyViewEl = document.querySelector("#search-history");
    const resultViewEl = document.querySelector("#search-result");

    this.formView = new FormView(formViewEl)
      .on("@submit", e => this.search(e.detail.input))
      .on("@reset", () => this.renderView());

    this.tabView = new TabView(tabViewEl).on("@change", e =>
      this.onChangeTab(e.detail.tabName)
    );

    this.keywordView = new KeywordView(keywordViewEl).on("@click", e =>
      this.search(e.detail.keyword)
    );

    this.historyView = new HistoryView(historyViewEl)
      .on("@click", e => this.search(e.detail.keyword))
      .on("@remove", e => this.onRemoveHistory(e.detail.keyword));

    this.resultView = new ResultView(resultViewEl);

    this.selectedTab = "추천 검색어";
    this.renderView();
  }

  async search(query) {
    this.formView.setValue(query);
    const data = await SearchModel.list(query);
    this.onSearchResult(data);
  }

  onSearchResult(data) {
    this.tabView.hide();
    this.keywordView.hide();
    this.historyView.hide();
    this.resultView.mount(data);
  }

  onChangeTab(tabName) {
    this.selectedTab = tabName;
    this.renderView();
  }

  async renderView() {
    this.tabView.setActiveTab(this.selectedTab);

    if (this.selectedTab === "추천 검색어") {
      const data = await KeywordModel.list();
      this.keywordView.mount(data);
      this.historyView.hide();
    } else {
      const data = await HistoryModel.list();
      this.historyView.mount(data).bindRemoveBtn();
      this.keywordView.hide();
    }

    this.resultView.hide();
  }

  onRemoveHistory(keyword) {
    HistoryModel.remove(keyword);
    this.renderView();
  }
}
