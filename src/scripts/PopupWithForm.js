import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit, loadingText = "Guardando...") {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._inputList = this._popup.querySelectorAll(".popup__input");
    this._submitButton = this._popup.querySelector(".popup__button");
    this._defaultButtonText = this._submitButton.textContent;
    this._loadingText = loadingText;
    this._formValidator = null;
  }

  _getInputValues() {
    const formValues = {};
    this._inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = this._loadingText;
      this._submitButton.disabled = true;
      this._submitButton.classList.remove("popup__button_disabled");
    } else {
      this._submitButton.textContent = this._defaultButtonText;
      this._submitButton.disabled = false;
    }
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
    this._submitButton.textContent = this._defaultButtonText;
    this._submitButton.classList.add("popup__button_disabled");
    this._submitButton.disabled = true;
    if (this._formValidator) {
      this._formValidator.resetValidation();
    }
  }
}
