export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);;
  }

<<<<<<< HEAD
  renderItems(itemsArr) {
    itemsArr.forEach((item) => this._renderer(item));
=======
<<<<<<< HEAD
  renderItems(itemsArr) {
    itemsArr.forEach((item) => this._renderer(item));
=======
  renderItems() {
    this._initialArray.forEach((item) => this._renderer(item));
>>>>>>> d157c0c6f204d291065af2fc0548a04ac5f7b5e0
>>>>>>> 5fdf863e8f3356e6fbd6ffba85122907ce5024c4
  }

  addItems(items) {
    this._container.append(items);
  }

  addItem(element) {
    this._container.prepend(element);
  }
}
