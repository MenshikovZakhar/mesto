export default class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._buttonElement = formElement.querySelector(config.submitButtonSelector);
    this._inputList = Array.from(formElement.querySelectorAll(this._config.inputSelector));
    this._formElement = formElement;
  };

  // функция добавления класс с ошибкой
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.classList.add(this._config.errorClass);
    errorElement.textContent = errorMessage;
  };

  // функция удаления класс с ошибкой
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = " ";
  };

  // функция проверки валидность поля
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  //функция проверки ввода на корректность
  _hasInvalidInput() {
    return this._inputList.some(input => !input.validity.valid)
  };


  _disableSubmitButton() {
    this._buttonElement.classList.add(this._config.inactiveButtonClass);
    this._buttonElement.disabled = true;
  }
  _enableSubmitButton() {
    this._buttonElement.classList.remove(this._config.inactiveButtonClass);
    this._buttonElement.disabled = false;
  }

  //функция изменения состояния кнопки
  _setButtonState() {
    if (this._hasInvalidInput()) {
      this._disableSubmitButton();
    } else {
      this._enableSubmitButton();
    }
  };

  //функция добавления обработчиков полям формы
  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._setButtonState();
      });
    });
  };

  enableValidation() {
    this._setEventListeners();
  }

  //Функция сброса ошибок
  restartFormValidation() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
    this._setButtonState();
  }
}
