import { zoomImagePopup } from "./index.js";
export class Card {
  constructor(placeValue, linkValue, templateSelector) {
    this._placeValue = placeValue;
    this._linkValue = linkValue;
    this._templateSelector = templateSelector;
  }

  // методом, который забирает разметку из HTML и клонируем элемент
  _getTemplate() {
    const elementTemplate = document.querySelector(this._templateSelector).content;
    const card = elementTemplate.querySelector(".elements__card").cloneNode(true);
    return card;
  };

  //метод удаления карточек
  _cardRemove(event) {
    event.target.closest(".elements__card").remove();
  };

  //метод лайка карточки
  _cardLike(event) {
    event.target.classList.toggle("elements__like_active");
  };

  //метод добавление обработчиков
  _setEventListners() {
    this._element.querySelector(".elements__like").addEventListener("click", this._cardLike);
    this._element.querySelector(".elements__remove-button").addEventListener("click", this._cardRemove);
    this._element.querySelector(".elements__image").addEventListener("click", () => { zoomImagePopup(this._placeValue, this._linkValue) });
  };

  // методом, который добавляет данные в разметку
  generateCard() {
    this._element = this._getTemplate();
    const cardImage = this._element.querySelector(".elements__image");
    const cardText = this._element.querySelector(".elements__title");
    cardImage.setAttribute("src", this._linkValue);
    cardImage.setAttribute("alt", this._placeValue);
    cardText.textContent = this._placeValue;
    this._setEventListners();
    return this._element;
  };
}
