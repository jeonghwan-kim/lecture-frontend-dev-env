import View from './View.js'

const tag = '[TabView]'

const TabView = Object.create(View)

TabView.tabNames = {
  recommand: '추천 검색어',
  recent: '최근 검색어',
}

TabView.setup = function (el) {
  this.init(el)
  this.bindClick()
  return this
}

TabView.setActiveTab = function (tabName) {
  Array.from(this.el.children).forEach(li => {
    li.className = li.innerHTML === tabName ? 'active' : ''
  })
  this.show()
}

TabView.bindClick = function () {
  Array.from(this.el.children).forEach(li => {
    li.addEventListener('click', e => this.onClick(li.innerHTML))
  })
}

TabView.onClick = function (tabName) {
  this.setActiveTab(tabName)
  this.emit('@change', {
    tabName
  })
}

export default TabView
