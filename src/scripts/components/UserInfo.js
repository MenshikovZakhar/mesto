export default class UserInfo {
  constructor(userName, userAbout, avatarSelector) {
    this._name = document.querySelector(userName);
    this._about = document.querySelector(userAbout);
    this.avatarUser = document.querySelector(avatarSelector);
  }

  //возврат объекта с данными пользователя
  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._about.textContent
    }
  }

  //принимает новые данные пользователя и добавляет их на страницу
  setUserInfo(data) {
    this._name.textContent = data.name;
    this._about.textContent = data.about;
    this.avatarUser.src = data.avatar;
    this.avatarUser.alt = data.name;
  }
}
