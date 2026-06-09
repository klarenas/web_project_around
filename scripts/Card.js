// Ya no necesitamos importar PopupWithImage porque recibimos handleCardClick como callback

export default class Card {
  constructor(
    data,
    templateSelector,
    handleCardClick,
    handleCardDelete,
    handleCardLike,
  ) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._isLiked = Boolean(data.isLiked);
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handleCardLike = handleCardLike;
  }

  _getTemplate() {
    const cardTemplate = document.querySelector(this._templateSelector).content;
    return cardTemplate.querySelector(".card").cloneNode(true);
  }

  _setEventListeners() {
    this._cardImage.addEventListener("click", () => this._handleImageClick());
    this._likeButton.addEventListener("click", () => this._handleLikeClick());
    this._deleteButton.addEventListener("click", () =>
      this._handleDeleteClick(),
    );
  }

  _handleImageClick() {
    // Llamar a la función handleCardClick pasada en el constructor
    this._handleCardClick(this._link, this._name);
  }

  _handleLikeClick() {
    const newIsLiked = !this._isLiked;

    this._handleCardLike(this._id, newIsLiked)
      .then(() => {
        this._isLiked = newIsLiked;
        this._likeButton.classList.toggle(
          "card__like-button_active",
          this._isLiked,
        );
      })
      .catch((err) => {
        console.log("Error al cambiar like:", err);
      });
  }

  _handleDeleteClick() {
    this._handleCardDelete(this._id, this._element);
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".card__image");
    this._cardTitle = this._element.querySelector(".card__title");
    this._likeButton = this._element.querySelector(".card__like-button");
    this._deleteButton = this._element.querySelector(".card__delete-button");

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;

    if (this._isLiked) {
      this._likeButton.classList.add("card__like-button_active");
    }

    this._setEventListeners();

    return this._element;
  }
}
