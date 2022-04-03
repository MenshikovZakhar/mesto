export default class Card {
  constructor(placeValue, linkValue, likes, id, userId, ownerId, templateSelector, handleCardClick, handleDeleteClick, handleLikeClick) {
    this._placeValue = placeValue;
    this._linkValue = linkValue;
    this._likes = likes;
    this._id = id;
    this._userId = userId;
    this._ownerId = ownerId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

  // методом, который забирает разметку из HTML и клонируем элемент
  _getTemplate() {
    this._elementTemplate = document.querySelector(this._templateSelector).content;
    this._card = this._elementTemplate.querySelector(".elements__card").cloneNode(true);
    return this._card;
  };

  //метод удаления карточек
<<<<<<< HEAD
  removeCard() {
    this._element.remove();
=======
<<<<<<< HEAD
  removeCard() {
    this._element.remove();
=======
<<<<<<< HEAD
  removeCard() {
    this._element.remove();
=======
  _cardRemove = () => {
    this._card.remove();;
>>>>>>> d157c0c6f204d291065af2fc0548a04ac5f7b5e0
>>>>>>> 5fdf863e8f3356e6fbd6ffba85122907ce5024c4
>>>>>>> 9d2c36d2b3402d7cdaea04c5902f021e5dbedba3
  }

  isLiked() {
    const userHaslikedCard = this._likes.find((user) => user._id === this._userId)
    return userHaslikedCard
  }
  setLakes(newLikes) {
    this._likes = newLikes
    const likeCountElement = this._element.querySelector(".element__like-counter");
    likeCountElement.textContent = this._likes.length;
    if (this.isLiked()) {
      this._fillLike()
    } else {
      this._unfillLike()
    }
  }
  _fillLike() {
    this._element
      .querySelector(".elements__like")
      .classList.add("elements__like_active");
  }
  _unfillLike() {
    this._element
      .querySelector(".elements__like")
      .classList.remove("elements__like_active");
  }

  //метод добавление обработчиков
  _setEventListners() {
    this._element.querySelector(".elements__like").addEventListener("click", () => this._handleLikeClick(this._id));
    this._element.querySelector(".elements__remove-button").addEventListener("click", () => this._handleDeleteClick(this._id));
    this._element.querySelector('.elements__image').addEventListener('click', () => this._handleCardClick());
  };

  // методом, который добавляет данные в разметку
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListners();
    const cardImage = this._element.querySelector(".elements__image");
    const cardText = this._element.querySelector(".elements__title");
    cardImage.setAttribute("src", this._linkValue);
    cardImage.setAttribute("alt", this._placeValue);
    cardText.textContent = this._placeValue;
    this.setLakes(this._likes)
    const delButton = this._element.querySelector(".elements__remove-button");
    if (this._ownerId !== this._userId) {
      delButton.style.display = 'none'
    }
    return this._element;
  };
}
