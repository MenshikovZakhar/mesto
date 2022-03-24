export default class Card {
  constructor(placeValue, linkValue, templateSelector, { handleCardClick }) {
    this._placeValue = placeValue;
    this._linkValue = linkValue;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  // методом, который забирает разметку из HTML и клонируем элемент
  _getTemplate() {
    this._elementTemplate = document.querySelector(this._templateSelector).content;
    this._card = this._elementTemplate.querySelector(".elements__card").cloneNode(true);
    return this._card;
  };

  //метод удаления карточек
  _cardRemove = () => {
    this._card.remove();;
  }

  //метод лайка карточки
  _cardLike(event) {
    event.target.classList.toggle("elements__like_active");
  };

  //метод добавление обработчиков
  _setEventListners() {
    this._element.querySelector(".elements__like").addEventListener("click", this._cardLike);
    this._element.querySelector(".elements__remove-button").addEventListener("click", this._cardRemove);
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

    return this._element;
  };
}
