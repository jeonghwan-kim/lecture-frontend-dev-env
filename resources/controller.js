import model from "./model";
import view from "./view";

const controller = {
  async init(el) {
    this.el = el;
    view.render(await model.get(), this.el);
  }
};

export default controller;
