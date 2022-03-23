export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleOverlayClose = this._handleOverlayClose.bind(this);

  }

  //функция открытия попапа
  open() {
    this._popupSelector.classList.add("popup_opened");
    document.addEventListener('keydown', this._handleEscClose);
    document.addEventListener('click', this._handleOverlayClose)
  }

  //функция закрытия попапа
  close() {
    this._popupSelector.classList.remove("popup_opened");
    document.removeEventListener('keydown', this._handleEscClose);
    document.removeEventListener('click', this._handleOverlayClose);
  }

  //функция закрытия попапа нажатием на Esc
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      const openedPopUp = document.querySelector(".popup_opened");
      this.close(openedPopUp);
    }
  }

  //функция закрытия попапа кликом на оверлей
  _handleOverlayClose(evt) {
    if (evt.target.classList.contains("popup")) {
      this.close(evt.target);
    }
  };

  setEventListeners() {
    this._popupSelector.querySelector('.popup__close-button').addEventListener('click', () => this.close())
  }
}

