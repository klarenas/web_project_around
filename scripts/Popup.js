export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    // Método público que abre el popup
    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    // Método público que cierra el popup
    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    // Método privado que maneja el cierre con la tecla Escape
    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    // Método público que agrega detectores de eventos
    setEventListeners() {
        // Detector para el botón de cerrar (X)
        const closeButton = this._popup.querySelector('.popup__close-button');
        if (closeButton) {
            closeButton.addEventListener('click', () => this.close());
        }

        // Detector para cerrar al hacer clic en el área sombreada (overlay)
        this._popup.addEventListener('click', (evt) => {
            // Solo cierra si se hace clic en el overlay, no en el contenido del popup
            if (evt.target === this._popup) {
                this.close();
            }
        });
    }
}
