const editProfilePopup = document.querySelector('.popup');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileCloseButton = editProfilePopup.querySelector('.popup__close-button');
const profileTitle = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('.popup__form-info');
const nameInput = document.querySelector('.popup__item-username');
const jobInput = document.querySelector('.popup__item-about');

profileEditButton.addEventListener('click', editProfile);
profileCloseButton.addEventListener('click', () => closePopup(editProfilePopup));
formElement.addEventListener('submit', formSubmitHandler);

function editProfile() {
  openPopup(editProfilePopup);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileJob.textContent;
}
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(editProfilePopup);
}
