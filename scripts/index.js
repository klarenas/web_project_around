
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

// Popup de edición de perfil
const profilePopup = document.querySelector('.popup');
const profileCloseButton = profilePopup.querySelector('.popup__close-button');
const profileForm = profilePopup.querySelector('.popup__form');
const nameInput = profileForm.querySelector('.popup__input_type_name');
const aboutInput = profileForm.querySelector('.popup__input_type_about');

// Popup de nueva tarjeta
const newCardPopup = document.querySelector('.popup_type_new-card');
const newCardCloseButton = newCardPopup.querySelector('.popup__close-button');
const newCardForm = newCardPopup.querySelector('.popup__form');
const cardTitleInput = newCardForm.querySelector('.popup__input_type_card-title');
const cardUrlInput = newCardForm.querySelector('.popup__input_type_card-url');

// Popup de imagen
const imagePopup = document.querySelector('.popup_type_image');
const imagePopupCloseButton = imagePopup.querySelector('.popup__close-button');
const popupImage = imagePopup.querySelector('.popup__image');
const popupCaption = imagePopup.querySelector('.popup__caption');

const initialCards = [
    {
        name: 'Las Vegas',
        link: './images/Las vegas.avif'
    },
    {
        name: 'Miami Vista al Mar ',
        link: './images/vista_al_mar_miami.avif'
    },
    {
        name: 'Puerto Rico Fuerte',
        link: './images/fuerte_puerto_rico.avif'
    },
    {
        name: 'Nueva York Iglesia San Patricio',
        link: './images/iglesia_san_patricio_ny.jpeg'
    },
    {
        name: 'Washington Obelisco',
        link: './images/obelisco_whashington.avif'
    },
    {
        name: 'Nueva York Rascacielos',
        link: './images/rascacielos_ny.jpeg'
    }
];


function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function openProfilePopup() {
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
    openPopup(profilePopup);
}

function openNewCardPopup() {
    cardTitleInput.value = '';
    cardUrlInput.value = '';
    openPopup(newCardPopup);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    closePopup(profilePopup);
}

function handleNewCardFormSubmit(evt) {
    evt.preventDefault();
    const newCard = {
        name: cardTitleInput.value,
        link: cardUrlInput.value
    };
    const cardElement = createCard(newCard);
    const placesList = document.querySelector('.places__list');
    placesList.prepend(cardElement);
    closePopup(newCardPopup);
}

function createCard(data) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const likeButton = cardElement.querySelector('.card__like-button');
    const deleteButton = cardElement.querySelector('.card__delete-button');

    cardImage.src = data.link;
    cardImage.alt = data.name;
    cardTitle.textContent = data.name;

    cardImage.addEventListener('click', () => {
        popupImage.src = data.link;
        popupImage.alt = data.name;
        popupCaption.textContent = data.name;
        openPopup(imagePopup);
    });

    likeButton.addEventListener('click', () => {
        likeButton.classList.toggle('card__like-button_active');
    });

    deleteButton.addEventListener('click', () => {
        cardElement.remove();
    });

    return cardElement;
}

function renderCards() {
    const placesList = document.querySelector('.places__list');
    initialCards.forEach(cardData => {
        const cardElement = createCard(cardData);
        placesList.append(cardElement);
    });
}


profileEditButton.addEventListener('click', openProfilePopup);
profileCloseButton.addEventListener('click', () => closePopup(profilePopup));
profileForm.addEventListener('submit', handleProfileFormSubmit);

profileAddButton.addEventListener('click', openNewCardPopup);
newCardCloseButton.addEventListener('click', () => closePopup(newCardPopup));
newCardForm.addEventListener('submit', handleNewCardFormSubmit);

imagePopupCloseButton.addEventListener('click', () => closePopup(imagePopup));

renderCards();
