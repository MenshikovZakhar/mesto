import Card from "../scripts/components/Card.js";
import { initialCards } from "../scripts/components/initialCards.js";
import FormValidator from "../scripts/components/FormValidator.js";
import { config } from "../scripts/utils/constants.js";
import Section from "../scripts/components/Section.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import UserInfo from "../scripts/components/UserInfo.js";
import './index.css';

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

//Инициализация попапа с картинкой
const popupWithImage = new PopupWithImage(".popup-image");
popupWithImage.setEventListeners();


//функция создания новых карточек
const renderercard = (item) => {
  const card = new Card(
    item.name,
    item.link,
    ".card-template",
    {
      handleCardClick: () => {
        popupWithImage.open(item.name, item.link);
      }
    }
  );
  const cardElement = card.generateCard();
  return cardElement;
}

//отображение карточек
const standardCards = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      standardCards.addItems(renderercard(item));
    }
  },
  ".elements__list"
);
standardCards.renderItems();

//инициализация попапа карточек
const popupCard = new PopupWithForm({
  popupSelector: ".popup-card",
  handleFormSubmit: (item) => {
    formCard.reset();
    standardCards.addItem(renderercard(item));
    popupCard.close();
  }
});
popupCard.setEventListeners();

//открытия попапа добавления карточек
showAddCardPopup.addEventListener("click", () => {
  formCard.reset();
  formValidators['addCard'].restartFormValidation()
  popupCard.open();
});


//Инициализация класса по добалению данных пользователя
const userInfo = new UserInfo(
  ".profile__title",
  ".profile__subtitle",
);

//инициализация попапа профиля
const popupProfile = new PopupWithForm({
  popupSelector: ".popup-profile",
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data);
    popupProfile.close();
  }
});
popupProfile.setEventListeners();

//открытия попапа профиля
profileEditButton.addEventListener("click", () => {
  const user = userInfo.getUserInfo();
  nameInput.value = user.name;
  jobInput.value = user.about;
  popupProfile.open();
  formValidators['editProfile'].restartFormValidation()
});


const formValidators = {}
//Включение валидации
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement)
    //получаем данные из атрибута `name` у формы
    const formName = formElement.getAttribute('name')

    //вот тут в объект записываем под именем формы
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};
enableValidation(config);
