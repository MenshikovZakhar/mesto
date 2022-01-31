const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const editProfilePopup = document.querySelector(".popup-profile");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileCloseButton = editProfilePopup.querySelector(".popup__close-button");
const profileTitle = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
const profileForm = document.querySelector(".popup__form-info");
const nameInput = document.querySelector(".popup__item-username");
const jobInput = document.querySelector(".popup__item-about");
profileEditButton.addEventListener("click", editProfile);
profileCloseButton.addEventListener("click", () => closePopup(editProfilePopup));
profileForm.addEventListener("submit", handleProfileFormSubmit);
function editProfile() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(editProfilePopup);
}
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(editProfilePopup);
}

const cardTemplate = document.querySelector(".card-template").content;
const cardContainer = document.querySelector(".elements__list");
const standardCards = initialCards.map(function (card) {
  return createCard(card.name, card.link);
});
cardContainer.append(...standardCards);

const addCardPopup = document.querySelector(".popup-card");
const showAddCardPopup = document.querySelector(".profile__add-button");
const cardCloseButton = addCardPopup.querySelector(".popup__close-button");
const formCard = document.querySelector(".popup__form-card");
const placeInput = document.querySelector(".popup__item-place");
const linkInput = document.querySelector(".popup__item-link");
showAddCardPopup.addEventListener("click", function () {
  openPopup(addCardPopup);
});

formCard.addEventListener("submit", saveCardForm);
cardCloseButton.addEventListener("click", () => closePopup(addCardPopup));
function saveCardForm(evt) {
  evt.preventDefault();
  cardContainer.prepend(createCard(placeInput.value, linkInput.value));
  closePopup(addCardPopup);
  clearCardForm();
}
function clearCardForm() {
  placeInput.value = "";
  linkInput.value = "";
}


const imagePopup = document.querySelector(".popup-image");
const imageCloseButton = imagePopup.querySelector(".popup__close-button");
const zoomedImagePopup = document.querySelector(".popup__image");
const imageText = document.querySelector(".popup__caption");
imageCloseButton.addEventListener("click", function () {
  closePopup(imagePopup);
});

function createCard(placeValue, linkValue) {
  const card = cardTemplate.querySelector(".elements__card").cloneNode(true);
  const cardImage = card.querySelector(".elements__image");
  const cardText = card.querySelector(".elements__title");
  const cardLike = card.querySelector(".elements__like");
  const cardRemove = card.querySelector(".elements__remove-button");
  cardImage.src = linkValue;
  cardImage.alt = placeValue;
  cardText.textContent = placeValue;
  cardRemove.addEventListener("click", function (evt) {
    evt.target.closest(".elements__card").remove();
  });
  cardLike.addEventListener("click", function (evt) {
    evt.target.classList.toggle("elements__like_active");
  });
  cardImage.addEventListener("click", zoomImagePopup);
  function zoomImagePopup() {
    openPopup(imagePopup);
    zoomedImagePopup.src = linkValue;
    zoomedImagePopup.alt = placeValue;
    imageText.textContent = placeValue;
  }

  return card;
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
}
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}
