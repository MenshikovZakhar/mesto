import { Card } from "./Card.js";
import { initialCards } from "./initialCards.js";
import { FormValidator } from "./FormValidator.js";
import { config } from "./constants.js";

const editProfilePopup = document.querySelector(".popup-profile");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileCloseButton = editProfilePopup.querySelector(".popup__close-button");
const profileTitle = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
const profileForm = document.querySelector(".popup__form-info");
const nameInput = document.querySelector(".popup__item-username");
const jobInput = document.querySelector(".popup__item-about");
const addCardPopup = document.querySelector(".popup-card");
const showAddCardPopup = document.querySelector(".profile__add-button");
const cardCloseButton = addCardPopup.querySelector(".popup__close-button");
const formCard = document.querySelector(".popup__form-card");
const placeInput = document.querySelector(".popup__item-place");
const linkInput = document.querySelector(".popup__item-link");
const imagePopup = document.querySelector(".popup-image");
const imageCloseButton = imagePopup.querySelector(".popup__close-button");
const cardContainer = document.querySelector(".elements__list");
const zoomedImagePopup = document.querySelector(".popup__image");
const imageText = document.querySelector(".popup__caption");

//добавления карточки в контейнер
const standardCards = initialCards.map(function (card) {
  return createCard(card.name, card.link);
});
cardContainer.append(...standardCards);

//функция создания новых карточек
function createCard(placeValue, linkValue) {
  return (new Card(placeValue, linkValue, ".card-template", handleCardClick)).generateCard();
}

//функция отправки формы для добавления карточек
function saveCardForm(evt) {
  evt.preventDefault();
  cardContainer.prepend(createCard(placeInput.value, linkInput.value));
  closePopup(addCardPopup);
  formCard.reset();
}

//функция открытия профиля
function editProfile() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(editProfilePopup);
  formValidators['editProfile'].restartFormValidation()
}

//функция отправки формы для редактирования профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(editProfilePopup);
}

//функция закрытия попапа нажатием на Esc
function handleEscForm(event) {
  if (event.key === "Escape") {
    const openedPopUp = document.querySelector(".popup_opened");
    closePopup(openedPopUp);
  }
}

//функция закрытия попапа кликом на оверлей
function handleOverlayClickForm(event) {
  if (event.target.classList.contains("popup")) {
    closePopup(event.target);
  }
}

//функция открытия попапа
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keyup", handleEscForm);
  document.addEventListener("click", handleOverlayClickForm);
}

//функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keyup", handleEscForm);
  document.removeEventListener("click", handleOverlayClickForm);
}

//функция открытия попапа с картинкой
function handleCardClick(placeValue, linkValue) {
  zoomedImagePopup.src = linkValue;
  zoomedImagePopup.alt = placeValue;
  imageText.textContent = placeValue;
  openPopup(imagePopup);
}

//функция закрытия попапа с картинкой
imageCloseButton.addEventListener("click", function () {
  closePopup(imagePopup);
});

//обработчики событий
profileEditButton.addEventListener("click", editProfile);
profileCloseButton.addEventListener("click", () => closePopup(editProfilePopup));
profileForm.addEventListener("submit", handleProfileFormSubmit);
formCard.addEventListener("submit", saveCardForm);
cardCloseButton.addEventListener("click", () => closePopup(addCardPopup));
showAddCardPopup.addEventListener("click", function () {
  formCard.reset();
  formValidators['addCard'].restartFormValidation()
  openPopup(addCardPopup);
});

const formValidators = {}
// Включение валидации
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement)
    // получаем данные из атрибута `name` у формы
    const formName = formElement.getAttribute('name')

    // вот тут в объект записываем под именем формы
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};
enableValidation(config);
