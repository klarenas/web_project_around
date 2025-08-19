// Ya no necesitamos importar PopupWithImage porque recibimos handleCardClick como callback

export default class Card {
    constructor(data, templateSelector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        const cardTemplate = document.querySelector(this._templateSelector).content;
        return cardTemplate.querySelector('.card').cloneNode(true);
    }

    _setEventListeners() {
        this._cardImage.addEventListener('click', () => this._handleImageClick());
        this._likeButton.addEventListener('click', () => this._handleLikeClick());
        this._deleteButton.addEventListener('click', () => this._handleDeleteClick());
    }

    _handleImageClick() {
        // Llamar a la función handleCardClick pasada en el constructor
        this._handleCardClick(this._link, this._name);
    }

    _handleLikeClick() {
        this._likeButton.classList.toggle('card__like-button_active');
    }

    _handleDeleteClick() {
        this._element.remove();
        this._element = null;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.card__image');
        this._cardTitle = this._element.querySelector('.card__title');
        this._likeButton = this._element.querySelector('.card__like-button');
        this._deleteButton = this._element.querySelector('.card__delete-button');

        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._cardTitle.textContent = this._name;

        this._setEventListeners();

        return this._element;
    }
}

