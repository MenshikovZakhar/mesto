const config = {
  formSelector: '.popup__forms',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__item_error',
  errorClass: 'popup__input-error'
};

const showInputError = ((formElement, inputElement, errorMessage, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
});

const hideInputError = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {

    showInputError(formElement, inputElement, inputElement.validationMessage, config);
  } else {

    hideInputError(formElement, inputElement, config);
  }
};

const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, config);
      setButtonState(formElement, buttonElement, config)
    });
  });
};

const disableSubmitButton = (config, buttonElement) => {
  buttonElement.classList.add(config.inactiveButtonClass);
  buttonElement.disabled = true;
}
const enableSubmitButton = (config, buttonElement) => {
  buttonElement.classList.remove(config.inactiveButtonClass);
  buttonElement.disabled = false;
}

function setButtonState(formElement, buttonElement, config) {
  if (formElement.checkValidity()) {
    enableSubmitButton(config, buttonElement);
  } else {
    disableSubmitButton(config, buttonElement);
  }
}

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    setEventListeners(formElement, config);
  });
};

enableValidation({
  formSelector: '.popup__forms',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__item_error',
  errorClass: 'popup__input-error'
});


