import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import Popup from "./Popup.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithConfirmation from "./PopupWithConfirmation.js";
import UserInfo from "./UserInfo.js";
import { api } from "./api.js";

let cardIdToDelete = null;
let cardElementToDelete = null;

const profileEditButton = document.querySelector(".profile__edit-button");
const profileAvatarEditButton = document.querySelector(
  ".profile__avatar-edit-button",
);
const profileAddButton = document.querySelector(".profile__add-button");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");

// Popup de edición de perfil
const profilePopup = document.querySelector(".popup");
const profileCloseButton = profilePopup.querySelector(".popup__close-button");
const profileForm = profilePopup.querySelector(".popup__form");
const nameInput = profileForm.querySelector(".popup__input_type_name");
const aboutInput = profileForm.querySelector(".popup__input_type_about");

// Popup de cambio de avatar
const avatarPopup = document.querySelector(".popup_type_edit-avatar");
const avatarForm = avatarPopup.querySelector(".popup__form");
const avatarInput = avatarForm.querySelector(".popup__input_type_avatar");

// Popup de nueva tarjeta
const newCardPopup = document.querySelector(".popup_type_new-card");
const newCardCloseButton = newCardPopup.querySelector(".popup__close-button");
const newCardForm = newCardPopup.querySelector(".popup__form");
const cardTitleInput = newCardForm.querySelector(
  ".popup__input_type_card-title",
);
const cardUrlInput = newCardForm.querySelector(".popup__input_type_card-url");

// Crear instancia de UserInfo
const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  jobSelector: ".profile__about",
  avatarSelector: ".profile__avatar",
});

// Crear instancias de las nuevas clases
const imagePopup = new PopupWithImage(".popup_type_image");
imagePopup.setEventListeners();

const deleteCardPopup = new PopupWithConfirmation(
  ".popup_type_delete-card",
  () => {
    api
      .deleteCard(cardIdToDelete)
      .then(() => {
        cardElementToDelete.remove();
        deleteCardPopup.close();
      })
      .catch((err) => {
        console.log("Error al eliminar tarjeta:", err);
      });
  },
);
deleteCardPopup.setEventListeners();

function createCard(cardData) {
  const card = new Card(
    cardData,
    "#card-template",
    (imageUrl, caption) => {
      imagePopup.open(imageUrl, caption);
    },
    (cardId, cardElement) => {
      cardIdToDelete = cardId;
      cardElementToDelete = cardElement;
      deleteCardPopup.open();
    },
    (cardId, isLiked) => {
      return api.changeCardLike(cardId, isLiked);
    },
  );

  return card.generateCard();
}

// Crear instancias de PopupWithForm para los formularios
const profilePopupInstance = new PopupWithForm(".popup", (formData) => {
  profilePopupInstance.renderLoading(true);
  api
    .setUserInfo({ name: formData.name, about: formData.about })
    .then((updatedUserData) => {
      userInfo.setUserInfo({
        name: updatedUserData.name,
        job: updatedUserData.about,
      });
      profilePopupInstance.close();
    })
    .catch((err) => {
      console.log("Error al actualizar perfil:", err);
      profilePopupInstance.renderLoading(false);
    });
});
profilePopupInstance.setEventListeners();

const avatarPopupInstance = new PopupWithForm(
  ".popup_type_edit-avatar",
  (formData) => {
    avatarPopupInstance.renderLoading(true);
    api
      .setUserAvatar({ avatar: formData.avatar })
      .then((updatedUserData) => {
        userInfo.setAvatar(updatedUserData.avatar);
        avatarPopupInstance.close();
      })
      .catch((err) => {
        console.log("Error al actualizar avatar:", err);
        avatarPopupInstance.renderLoading(false);
      });
  },
);
avatarPopupInstance.setEventListeners();

const newCardPopupInstance = new PopupWithForm(
  ".popup_type_new-card",
  (formData) => {
    const newCardData = {
      name: formData["title"],
      link: formData["url"],
    };
    newCardPopupInstance.renderLoading(true);
    api
      .addCard(newCardData)
      .then((cardData) => {
        cardSection.prependItem(createCard(cardData));
        newCardPopupInstance.close();
      })
      .catch((err) => {
        console.log("Error al crear tarjeta:", err);
        newCardPopupInstance.renderLoading(false);
      });
  },
  "Creando...",
);
newCardPopupInstance.setEventListeners();

// Crear la sección de tarjetas usando la clase Section
const cardSection = new Section(
  {
    items: [],
    renderer: (cardData) => {
      return createCard(cardData);
    },
  },
  ".places__list",
);

// Cargar perfil y tarjetas desde la API
api
  .getUserInfo()
  .then((userData) => {
    userInfo.setUserInfo({
      name: userData.name,
      job: userData.about,
      avatar: userData.avatar,
    });
  })
  .catch((err) => {
    console.log("Error al cargar perfil:", err);
  });

api
  .getCards()
  .then((cards) => {
    cardSection.renderfromApi(cards);
  })
  .catch((err) => {
    console.log("Error al cargar tarjetas:", err);
  });

// Funciones para abrir popups
function openProfilePopup() {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  aboutInput.value = userData.job;
  profilePopupInstance.open();
}

function openAvatarPopup() {
  avatarInput.value = userInfo.getUserInfo().avatar;
  avatarPopupInstance.open();
}

function openNewCardPopup() {
  newCardPopupInstance.open();
}

// Event listeners para botones
profileEditButton.addEventListener("click", openProfilePopup);
profileAvatarEditButton.addEventListener("click", openAvatarPopup);
profileAddButton.addEventListener("click", openNewCardPopup);

// Configuración para validación de formularios
const validationConfig = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

// Instancias de FormValidator para cada formulario
const profileFormValidator = new FormValidator(validationConfig, profileForm);
profileFormValidator.enableValidation();

const newCardFormValidator = new FormValidator(validationConfig, newCardForm);
newCardFormValidator.enableValidation();

const avatarFormValidator = new FormValidator(validationConfig, avatarForm);
avatarFormValidator.enableValidation();
