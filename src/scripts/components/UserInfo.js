export default class UserInfo {
  constructor(userName, userAbout) {
    this._name = document.querySelector(userName);
    this._about = document.querySelector(userAbout);
  }

  //возврат объекта с данными пользователя
  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._about.textContent
    }
  }

  //принимает новые данные пользователя и добавляет их на страницу
  setUserInfo(item) {
    this._name.textContent = item.name;
    this._about.textContent = item.about;
  }
}
