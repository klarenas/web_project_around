export default class UserInfo {
    constructor({ nameSelector, jobSelector }) {
        this._nameElement = document.querySelector(nameSelector);
        this._jobElement = document.querySelector(jobSelector);
    }

    // Método público que devuelve un objeto con información sobre el usuario
    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            job: this._jobElement.textContent
        };
    }

    // Método público que toma los datos del nuevo usuario y los agrega en la página
    setUserInfo({ name, job }) {
        this._nameElement.textContent = name;
        this._jobElement.textContent = job;
    }
}
