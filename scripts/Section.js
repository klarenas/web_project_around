export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    // Método público que renderiza todos los elementos en la página
    renderItems() {
        this._items.forEach(item => {
            const element = this._renderer(item);
            this.addItem(element);
        });
    }

    // Método público que toma un elemento del DOM y lo agrega al contenedor
    addItem(element) {
        this._container.append(element);
    }

    // Método público que agrega un elemento al principio del contenedor
    prependItem(element) {
        this._container.prepend(element);
    }

    // Método público para limpiar el contenedor
    clear() {
        this._container.innerHTML = '';
    }
}




















