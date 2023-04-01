class Api {
  constructor({ url, headers }) {
    this._url = url
    this._headers = headers
  }

  _checkRes(res) {
    if (res.ok) {
      return res.json()
    } else {
      return Promise.reject(`Ошибка: ${res.status}`)
    }
  }

  // 0. Карточки должны отображаться на странице только после получения id пользователя
  proceedFromServer() {
    return Promise.all([this.getInitialCards(), this.getUserObj()])
  }

  // 1. Загрузка информации о пользователе с сервера
  getUserObj() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
    }).then(this._checkRes)
  }

  // 2. Загрузка карточек с сервера
  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
    }).then(this._checkRes)
  }

  // 3. Редактирование профиля
  changeUserObj(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._checkRes)
  }

  // 4. Добавление новой карточки
  createCard(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._checkRes)
  }

  // 7. Удаление карточки
  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._checkRes)
  }

  // 8. Постановка и снятие лайка

  changeLikeCardStatus(id, isLiked) {
    if (isLiked) {
      return fetch(`${this._url}/cards/${id}/likes`, {
        method: 'PUT',
        headers: this._headers,
      }).then(this._checkRes)
    } else {
      return fetch(`${this._url}/cards/${id}/likes`, {
        method: 'DELETE',
        headers: this._headers,
      }).then(this._checkRes)
    }
  }

  // 9. Обновление аватара пользователя
  changeAvatar(avatar) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(avatar),
    }).then(this._checkRes)
  }
}

export const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-58',
  headers: {
    authorization: 'cbc52507-7845-477e-abfa-382323046090',
    'Content-Type': 'application/json',
  },
})
