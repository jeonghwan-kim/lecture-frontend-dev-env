import View from "./View.js";
import "./FormView.scss";

export default class FormView extends View {
  constructor(el) {
    super(el);
    this._inputEl = el.querySelector("[type=text]");
    this._resetEl = el.querySelector("[type=reset]");
    this.showResetBtn(false);
    this.bindEvents();
    return this;
  }

  showResetBtn(show = true) {
    this._resetEl.style.display = show ? "block" : "none";
  }

  bindEvents() {
    this.on("submit", e => e.preventDefault());
    this._inputEl.addEventListener("keyup", e => this.onKeyup(e));
    this._resetEl.addEventListener("click", () => this.onClickReset());
  }

  onKeyup(e) {
    const enter = 13;
    this.showResetBtn(this._inputEl.value.length);
    if (!this._inputEl.value.length) this.emit("@reset");
    if (e.keyCode !== enter) return;
    this.emit("@submit", { input: this._inputEl.value });
  }

  onClickReset() {
    this.emit("@reset");
    this.showResetBtn(false);
  }

  setValue(value = "") {
    this._inputEl.value = value;
    this.showResetBtn(this._inputEl.value.length);
  }
}
