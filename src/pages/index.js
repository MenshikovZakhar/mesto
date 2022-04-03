import Card from "../scripts/components/Card.js";
import { initialCards } from "../scripts/components/initialCards.js";
import FormValidator from "../scripts/components/FormValidator.js";
import { config } from "../scripts/utils/constants.js";
import Section from "../scripts/components/Section.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import UserInfo from "../scripts/components/UserInfo.js";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 5fdf863e8f3356e6fbd6ffba85122907ce5024c4
import Api from "../scripts/components/Api.js";
import PopupSubmit from "../scripts/components/PopupSubmit.js";
import './index.css';


<<<<<<< HEAD
=======
=======
import './index.css';

>>>>>>> d157c0c6f204d291065af2fc0548a04ac5f7b5e0
>>>>>>> 5fdf863e8f3356e6fbd6ffba85122907ce5024c4
const profileEditButton = document.querySelector(".profile__edit-button");
const nameInput = document.querySelector(".popup__item-username");
const jobInput = document.querySelector(".popup__item-about");
const showAddCardPopup = document.querySelector(".profile__add-button");
const formCard = document.querySelector(".popup__form-card");
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 5fdf863e8f3356e6fbd6ffba85122907ce5024c4
const editButtonAvatar = document.querySelector(".profile__avatar-overlay");

//подключение апи
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-39',
  headers: {
    authorization: '7c23201b-b980-41a3-b675-2a551de25bb3',
    'content-type': 'application/json'
  }
});

//Загрузка с сервера информации о пользователе и карточек на страницу
let userId
api.getUserProfile()
  .then(res => {
    userInfo.setUserInfo(res);
    userId = res._id
  })
  .catch((error) => {
    console.log(error);
  });

api.getInitialCards()
  .then(cardArr => {
    standardCards.renderItems(cardArr)
  })
  .catch((error) => {
    console.log(error);
  });

<<<<<<< HEAD
=======
=======
>>>>>>> d157c0c6f204d291065af2fc0548a04ac5f7b5e0
>>>>>>> 5fdf863e8f3356e6fbd6ffba85122907ce5024c4

//Инициализация попапа с картинкой
const popupWithImage = new PopupWithImage(".popup-image");
popupWithImage.setEventListeners();

<<<<<<< HEAD
///функция создания новых карточек
=======
<<<<<<< HEAD
///функция создания новых карточек
=======
//функция создания новых карточек
>>>>>>> d157c0c6f204d291065af2fc0548a04ac5f7b5e0
>>>>>>> 5fdf863e8f3356e6fbd6ffba85122907ce5024c4
const renderercard = (item) => {
  const card = new Card(
    item.name,
    item.link,
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 5fdf863e8f3356e6fbd6ffba85122907ce5024c4
    item.likes,
    item._id,
    userId,
    item.owner._id,
    ".card-template",
    () => { popupWithImage.open(item.name, item.link) },
    (id) => {
      popupDelCard.setSubmitAction(() => {
        api.deleteCard(id)
          .then(() => {
            card.removeCard();
            popupDelCard.close();
          })
          .catch(() => {
            console.log("Ошибка удаления");
          });
      });
      popupDelCard.open();
    },
    (id) => {
      if (card.isLiked()) {
        api.deleteLike(id)
          .then(res => {
            card.setLakes(res.likes)
          })
      } else {
        api.addLike(id)
          .then(res => {
            card.setLakes(res.likes)
          })
<<<<<<< HEAD
=======
=======
    ".card-template",
    {
      handleCardClick: () => {
        popupWithImage.open(item.name, item.link);
>>>>>>> d157c0c6f204d291065af2fc0548a04ac5f7b5e0
>>>>>>> 5fdf863e8f3356e6fbd6ffba85122907ce5024c4
      }
    }
  );
  const cardElement = card.generateCard();
  return cardElement;
}

//отображение карточек
const standardCards = new Section(
  {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    data: initialCards,
>>>>>>> d157c0c6f204d291065af2fc0548a04ac5f7b5e0
>>>>>>> 5fdf863e8f3356e6fbd6ffba85122907ce5024c4
    renderer: (item) => {
      standardCards.addItems(renderercard(item));
    }
  },
  ".elements__list"
);
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
standardCards.renderItems();
>>>>>>> d157c0c6f204d291065af2fc0548a04ac5f7b5e0
>>>>>>> 5fdf863e8f3356e6fbd6ffba85122907ce5024c4

//инициализация попапа карточек
const popupCard = new PopupWithForm({
  popupSelector: ".popup-card",
  handleFormSubmit: (item) => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 5fdf863e8f3356e6fbd6ffba85122907ce5024c4
    popupCard.setUserUX(true);
    api.addNewCard(item)
      .then((res) => {
        const newCard = renderercard(res);
        standardCards.addItem(newCard);
        popupCard.close();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => popupCard.setUserUX(false));
<<<<<<< HEAD
=======
=======
    formCard.reset();
    standardCards.addItem(renderercard(item));
    popupCard.close();
>>>>>>> d157c0c6f204d291065af2fc0548a04ac5f7b5e0
>>>>>>> 5fdf863e8f3356e6fbd6ffba85122907ce5024c4
  }
});
popupCard.setEventListeners();

//открытия попапа добавления карточек
showAddCardPopup.addEventListener("click", () => {
  formCard.reset();
  formValidators['addCard'].restartFormValidation()
  popupCard.open();
});

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 5fdf863e8f3356e6fbd6ffba85122907ce5024c4
// Инициализация попапа "Удаление карточки"
const popupDelCard = new PopupSubmit({
  popupSelector: ".popup-delete",
});
popupDelCard.setEventListeners();

<<<<<<< HEAD
=======
=======
>>>>>>> d157c0c6f204d291065af2fc0548a04ac5f7b5e0
>>>>>>> 5fdf863e8f3356e6fbd6ffba85122907ce5024c4

//Инициализация класса по добалению данных пользователя
const userInfo = new UserInfo(
  ".profile__title",
  ".profile__subtitle",
<<<<<<< HEAD
  ".profile__avatar",
=======
<<<<<<< HEAD
  ".profile__avatar",
=======
>>>>>>> d157c0c6f204d291065af2fc0548a04ac5f7b5e0
>>>>>>> 5fdf863e8f3356e6fbd6ffba85122907ce5024c4
);

//инициализация попапа профиля
const popupProfile = new PopupWithForm({
  popupSelector: ".popup-profile",
  handleFormSubmit: (data) => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 5fdf863e8f3356e6fbd6ffba85122907ce5024c4
    popupProfile.setUserUX(true);
    api.profileEdit(data)
      .then((res) => {
        userInfo.setUserInfo(res);
        popupProfile.close();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => popupCard.setUserUX(false));
  },
<<<<<<< HEAD
=======
=======
    userInfo.setUserInfo(data);
    popupProfile.close();
  }
>>>>>>> d157c0c6f204d291065af2fc0548a04ac5f7b5e0
>>>>>>> 5fdf863e8f3356e6fbd6ffba85122907ce5024c4
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 5fdf863e8f3356e6fbd6ffba85122907ce5024c4
//инициализация попапа аватарки
const popupAvatar = new PopupWithForm({
  popupSelector: ".popup-avatar",
  handleFormSubmit: (data) => {
    api.editAvatar(data)
      .then((res) => {
        userInfo.setUserInfo(res);
        popupAvatar.close();
      })
      .catch((error) => {
        console.log(error);
      });
  },
});
popupAvatar.setEventListeners();

//открытия попапа аватарки
editButtonAvatar.addEventListener("click", () => {
  popupAvatar.open();
  formValidators['editProfile'].restartFormValidation()
});
<<<<<<< HEAD
=======
=======
>>>>>>> d157c0c6f204d291065af2fc0548a04ac5f7b5e0
>>>>>>> 5fdf863e8f3356e6fbd6ffba85122907ce5024c4

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
