import Popup from "./Popup.js";

export default class PopupSubmit extends Popup {
  constructor({ popupSelector }) {
    super(popupSelector);
  }

  setSubmitAction(submitAction) {
    this._handleSubmitCallback = submitAction;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupSelector.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmitCallback();
    });
  }
}
