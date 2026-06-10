class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;

    this._headers = headers;
  }

  getCards() {
    return fetch(`${this._baseUrl}/cards/`, {
      method: "GET",

      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Error: ${res.status}`);
    });
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me/`, {
      method: "GET",

      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Error: ${res.status}`);
    });
  }

  setUserInfo({ name, about }) {
    return fetch(`${this._baseUrl}/users/me/`, {
      method: "PATCH",

      headers: this._headers,

      body: JSON.stringify({ name, about }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Error: ${res.status}`);
    });
  }

  setUserAvatar({ avatar }) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",

      headers: this._headers,

      body: JSON.stringify({ avatar }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Error: ${res.status}`);
    });
  }

  addCard({ name, link }) {
    return fetch(`${this._baseUrl}/cards/`, {
      method: "POST",

      headers: this._headers,

      body: JSON.stringify({ name, link }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Error: ${res.status}`);
    });
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",

      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Error: ${res.status}`);
    });
  }

  changeCardLike(cardId, isLiked) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: isLiked ? "PUT" : "DELETE",
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Error: ${res.status}`);
    });
  }
}

export const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",

  headers: {
    authorization: "780d206d-7197-46c1-8078-04526adad464",

    "Content-Type": "application/json",
  },
});
