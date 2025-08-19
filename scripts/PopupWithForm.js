import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._popup.querySelectorAll('.popup__input');
    }

    // Método privado que recopila datos de todos los campos de entrada
    _getInputValues() {
        const formValues = {};
        this._inputList.forEach(input => {
            formValues[input.name] = input.value;
        });
        return formValues;
    }

    // Modifica el método padre setEventListeners()
    setEventListeners() {
        // Llamar al método padre para mantener funcionalidad de cerrar
        super.setEventListeners();
        
        // Agregar detector de eventos submit al formulario
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            // Llamar al callback con los valores del formulario
            this._handleFormSubmit(this._getInputValues());
        });
    }

    // Modifica el método padre close() para reiniciar el formulario
    close() {
        // Llamar al método padre
        super.close();
        // Reiniciar el formulario
        this._form.reset();
    }
}
