
const profileEditButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close-button');
const popupForm = popup.querySelector('.popup__form');
const nameInput = popupForm.querySelector('.popup__input_type_name');
const aboutInput = popupForm.querySelector('.popup__input_type_about');

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


function openPopup() {
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
    popup.classList.add('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    closePopup();
}

function createCard(data) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const likeButton = cardElement.querySelector('.card__like-button');

    cardImage.src = data.link;
    cardImage.alt = data.name;
    cardTitle.textContent = data.name;

    likeButton.addEventListener('click', () => {
        likeButton.classList.toggle('card__like-button_active');
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


profileEditButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
popupForm.addEventListener('submit', handleProfileFormSubmit);
renderCards();
