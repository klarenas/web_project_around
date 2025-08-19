import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';

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

// Las instancias de popup se crean más abajo usando las nuevas clases

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

// Crear instancia de UserInfo
const userInfo = new UserInfo({
    nameSelector: '.profile__name',
    jobSelector: '.profile__about'
});

// Crear instancias de las nuevas clases
const imagePopup = new PopupWithImage('.popup_type_image');
imagePopup.setEventListeners();

// Crear instancias de PopupWithForm para los formularios
const profilePopupInstance = new PopupWithForm('.popup', (formData) => {
    userInfo.setUserInfo({ name: formData.name, job: formData.about });
});
profilePopupInstance.setEventListeners();

const newCardPopupInstance = new PopupWithForm('.popup_type_new-card', (formData) => {
    const newCard = {
        name: formData['title'],
        link: formData['url']
    };
    const card = new Card(newCard, '#card-template', (imageUrl, caption) => {
        imagePopup.open(imageUrl, caption);
    });
    const cardElement = card.generateCard();
    cardSection.prependItem(cardElement);
});
newCardPopupInstance.setEventListeners();

// Crear la sección de tarjetas usando la clase Section
const cardSection = new Section({
    items: initialCards,
    renderer: (cardData) => {
        const card = new Card(cardData, '#card-template', (imageUrl, caption) => {
            imagePopup.open(imageUrl, caption);
        });
        return card.generateCard();
    }
}, '.places__list');

// Funciones para abrir popups
function openProfilePopup() {
    const userData = userInfo.getUserInfo();
    nameInput.value = userData.name;
    aboutInput.value = userData.job;
    profilePopupInstance.open();
}

function openNewCardPopup() {
    newCardPopupInstance.open();
}


// Event listeners para botones
profileEditButton.addEventListener('click', openProfilePopup);
profileAddButton.addEventListener('click', openNewCardPopup);

// Renderizar tarjetas iniciales
cardSection.renderItems();

// Configuración para validación de formularios
const validationConfig = {
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
};

// Instancias de FormValidator para cada formulario
const profileFormValidator = new FormValidator(validationConfig, profileForm);
profileFormValidator.enableValidation();

const newCardFormValidator = new FormValidator(validationConfig, newCardForm);
newCardFormValidator.enableValidation();


