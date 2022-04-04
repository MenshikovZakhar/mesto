import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupSelector.querySelector('.popup__forms');
    this._button = this._popupSelector.querySelector('button[type="submit"]');
    this._buttonDefaultText = this._button.textContent;
    this._inputList = Array.from(this._form.querySelectorAll('.popup__item'));
  }

  //собирает данные c полей формы
  _getInputValues() {
    const inputValues = {};
    this._inputList.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  setUserUX(isSending) {
    this._button.textContent = isSending ? 'Сохранение...' : this._buttonDefaultText;
  }

  close() {
    super.close()
    this._form.reset();
  }
}

