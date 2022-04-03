export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._initialArray = data;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);;
  }

  renderItems() {
    this._initialArray.forEach((item) => this._renderer(item));
  }

  addItems(items) {
    this._container.append(items);
  }

  addItem(element) {
    this._container.prepend(element);
  }
}
