export default class View {
  constructor(el) {
    if (!el) {
      throw new Error('el이 필요합니다')
    }

    this.el = el
    return this;
  }

  render(htmlString) {
    this.el.innerHTML = htmlString;
  }

  on(event, handler) {
    this.el.addEventListener(event, handler)
    return this
  }

  emit(event, data) {
    const evt = new CustomEvent(event, {
      detail: data
    })
    this.el.dispatchEvent(evt)
    return this
  }

  hide() {
    this.el.style.display = 'none'
    return this
  }

  show() {
    this.el.style.display = ''
    return this
  }
}
