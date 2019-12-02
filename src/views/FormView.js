import View from './View.js'

export default class FormView extends View {
  constructor (el) {
    super(el)
    this._inputEl = el.querySelector('[type=text]')
    this._resetEl = el.querySelector('[type=reset]')
    this._showResetBtn(false)
    this._bindEvents()
    return this
  }
  
  _showResetBtn(show = true) {
    this._resetEl.style.display = show ? 'block' : 'none'
  }
  
  _bindEvents() {
    this.on('submit', e => e.preventDefault())
    this._inputEl.addEventListener('keyup', e => this._onKeyup(e))
    this._resetEl.addEventListener('click', () => this._onClickReset())
  }
  
  _onKeyup(e) {
    const enter = 13
    this._showResetBtn(this._inputEl.value.length)
    if (!this._inputEl.value.length) this.emit('@reset')
    if (e.keyCode !== enter) return
    this.emit('@submit', { input: this._inputEl.value })
  }
  
  _onClickReset() {
    this.emit('@reset')
    this._showResetBtn(false)
  }
  
  setValue(value = '') {
    this._inputEl.value = value
    this._showResetBtn(this._inputEl.value.length)
  }

}
