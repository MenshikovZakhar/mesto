export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._buttonElement = formElement.querySelector(config.submitButtonSelector);
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
  _hasInvalidInput(inputList) {
    return inputList.some(input => !input.validity.valid)
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
  _setButtonState(inputList) {
    if (this._hasInvalidInput(inputList)) {
      this._disableSubmitButton();
    } else {
      this._enableSubmitButton();
    }
  };

  //функция добавления обработчиков полям формы
  _setEventListeners() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    this._setButtonState(inputList);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._setButtonState(inputList);
      });
    });
  };

  enableValidation() {
    this._setEventListeners();
  }
}
