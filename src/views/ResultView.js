import View from './View.js'

export default class ResultView extends View {
  constructor(el) {
    super(el)
    
    this._messages = {
      NO_RESULT: '검색 결과가 없습니다'
    }
  }
  
  mount(data = []) {
    this.el.innerHTML = data.length ? this._getSearchResultsHtml(data) : this.messages.NO_RESULT
    this.show()
  }

  _getSearchResultsHtml(data) {
    return data.reduce((html, item) => {
      html += this._getSearchItemHtml(item)
      return html
    }, '<ul>') + '</ul>'
  }
  
  _getSearchItemHtml(item) {
    return `<li>
      <img src="${item.image}" />
      <p>${item.name}</p>
    </li>`
  }
}
