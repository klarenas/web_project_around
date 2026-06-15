// Funciones de utilidad para manejo de popups
export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', handleEscClose);
}

export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', handleEscClose);
// Limpiar errores y resetear formularios al cerrar
    const form = popup.querySelector('.popup__form');
    if (form) {
        form.reset();
        const errorSpans = form.querySelectorAll('.popup__error');
        errorSpans.forEach(span => {
            span.textContent = '';
            span.classList.remove('popup__error_visible');
        });
        const submitButton = form.querySelector('.popup__button');
        if (submitButton) {
            submitButton.disabled = false;
            submitButton.classList.remove('popup__button_disabled');
        }
    }
}

export function handlePopupClick(evt) {
    if (evt.target.classList.contains('popup')) {
        closePopup(evt.target);
    }
}

export function handleEscClose(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        if (openedPopup) {
            closePopup(openedPopup);
        }
    }
}
