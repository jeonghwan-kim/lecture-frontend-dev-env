import View from './View.js'

const tag = '[FormView]'

const FormView = Object.create(View)

FormView.setup = function (el) {
  this.init(el)
  this.inputEl = el.querySelector('[type=text]')
  this.resetEl = el.querySelector('[type=reset')
  this.showResetBtn(false)
  this.bindEvents()
  return this
}

FormView.showResetBtn = function (show = true) {
  this.resetEl.style.display = show ? 'block' : 'none'
}

FormView.bindEvents = function () {
  this.on('submit', e => e.preventDefault())
  this.inputEl.addEventListener('keyup', e => this.onKeyup(e))
  this.resetEl.addEventListener('click', e => this.onClickReset())
}

FormView.onKeyup = function (e) {
  const enter = 13
  this.showResetBtn(this.inputEl.value.length)
  if (!this.inputEl.value.length) this.emit('@reset')
  if (e.keyCode !== enter) return
  this.emit('@submit', {
    input: this.inputEl.value
  })
}

FormView.onClickReset = function () {
  this.emit('@reset')
  this.showResetBtn(false)
}

FormView.setValue = function (value = '') {
  this.inputEl.value = value
  this.showResetBtn(this.inputEl.value.length)
}

export default FormView
