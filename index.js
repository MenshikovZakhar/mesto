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
const zoomedImagePopup = document.querySelector(".popup__image");
const imageText = document.querySelector(".popup__caption");
const cardTemplate = document.querySelector(".card-template").content;
const cardContainer = document.querySelector(".elements__list");

const standardCards = initialCards.map(function (card) {
  return createCard(card.name, card.link);
});
cardContainer.append(...standardCards);


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

function handleEscForm(event) {
  if (event.key === "Escape") {
    const openedPopUp = document.querySelector(".popup_opened");
    closePopup(openedPopUp);
  }
}

function handleOverlayClickForm(event) {
  if (event.target.classList.contains("popup")) {
    const openedPopUp = document.querySelector(".popup_opened");
    closePopup(openedPopUp);
  }
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keyup", handleEscForm);
  document.addEventListener("click", handleOverlayClickForm);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keyup", handleEscForm);
  document.removeEventListener("click", handleOverlayClickForm);
}


profileEditButton.addEventListener("click", editProfile);
profileCloseButton.addEventListener("click", () => closePopup(editProfilePopup));
profileForm.addEventListener("submit", handleProfileFormSubmit);
formCard.addEventListener("submit", saveCardForm);
cardCloseButton.addEventListener("click", () => closePopup(addCardPopup));

showAddCardPopup.addEventListener("click", function () {
  openPopup(addCardPopup);
  const buttonElement = formCard.querySelector('.popup__submit-button');
  disableSubmitButton(config, buttonElement);
});

imageCloseButton.addEventListener("click", function () {
  closePopup(imagePopup);
  clearCardForm();
});


