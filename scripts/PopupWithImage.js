import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        // Buscar los elementos de imagen y leyenda dentro del popup
        this._image = this._popup.querySelector('.popup__image');
        this._caption = this._popup.querySelector('.popup__caption');
    }

    // Método open() sobrescrito que recibe la URL de la imagen y su leyenda
    open(imageUrl, caption) {
        // Configurar la imagen
        this._image.src = imageUrl;
        this._image.alt = caption || 'Imagen';
        
        // Configurar la leyenda de la imagen
        this._caption.textContent = caption || '';

        // Esperar a que la imagen se cargue completamente antes de mostrar el popup
        this._image.onload = () => {
            // Llamar al método open() de la clase padre (Popup)
            super.open();
        };

        // Manejar errores de carga de imagen
        this._image.onerror = () => {
            console.error('Error al cargar la imagen:', imageUrl);
            // Aún así mostrar el popup con un mensaje de error
            this._caption.textContent = 'Error al cargar la imagen';
            super.open();
        };
    }
}
