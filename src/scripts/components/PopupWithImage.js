import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._title = this._popupSelector.querySelector('.popup__caption');
    this._image = this._popupSelector.querySelector('.popup__image');
  }

  open(name, link) {
    super.open();
    this._title.textContent = name;
    this._image.alt = name;
    this._image.src = link;
  }
}
