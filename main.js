(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i,a,c,u,l,s){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._placeValue=e,this._linkValue=n,this._likes=r,this._id=o,this._userId=i,this._ownerId=a,this._templateSelector=c,this._handleCardClick=u,this._handleDeleteClick=l,this._handleLikeClick=s}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return this._elementTemplate=document.querySelector(this._templateSelector).content,this._card=this._elementTemplate.querySelector(".elements__card").cloneNode(!0),this._card}},{key:"removeCard",value:function(){this._element.remove()}},{key:"isLiked",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._userId}))}},{key:"setLakes",value:function(e){this._likes=e,this._element.querySelector(".element__like-counter").textContent=this._likes.length,this.isLiked()?this._fillLike():this._unfillLike()}},{key:"_fillLike",value:function(){this._element.querySelector(".elements__like").classList.add("elements__like_active")}},{key:"_unfillLike",value:function(){this._element.querySelector(".elements__like").classList.remove("elements__like_active")}},{key:"_setEventListners",value:function(){var e=this;this._element.querySelector(".elements__like").addEventListener("click",(function(){return e._handleLikeClick(e._id)})),this._element.querySelector(".elements__remove-button").addEventListener("click",(function(){return e._handleDeleteClick(e._id)})),this._element.querySelector(".elements__image").addEventListener("click",(function(){return e._handleCardClick()}))}},{key:"generateCard",value:function(){this._element=this._getTemplate(),this._setEventListners();var e=this._element.querySelector(".elements__image"),t=this._element.querySelector(".elements__title");e.setAttribute("src",this._linkValue),e.setAttribute("alt",this._placeValue),t.textContent=this._placeValue,this.setLakes(this._likes);var n=this._element.querySelector(".elements__remove-button");return this._ownerId!==this._userId&&(n.style.display="none"),this._element}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._buttonElement=n.querySelector(t.submitButtonSelector),this._inputList=Array.from(n.querySelectorAll(this._config.inputSelector)),this._formElement=n}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._config.inputErrorClass),n.classList.add(this._config.errorClass),n.textContent=t}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._config.inputErrorClass),t.classList.remove(this._config.errorClass),t.textContent=" "}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_disableSubmitButton",value:function(){this._buttonElement.classList.add(this._config.inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"_enableSubmitButton",value:function(){this._buttonElement.classList.remove(this._config.inactiveButtonClass),this._buttonElement.disabled=!1}},{key:"_setButtonState",value:function(){this._hasInvalidInput()?this._disableSubmitButton():this._enableSubmitButton()}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._setButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"restartFormValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._setButtonState()}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}},{key:"addItems",value:function(e){this._container.append(e)}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClose=this._handleOverlayClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupSelector.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose),document.addEventListener("click",this._handleOverlayClose)}},{key:"close",value:function(){this._popupSelector.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose),document.removeEventListener("click",this._handleOverlayClose)}},{key:"_handleEscClose",value:function(e){if("Escape"===e.key){var t=document.querySelector(".popup_opened");this.close(t)}}},{key:"_handleOverlayClose",value:function(e){e.target.classList.contains("popup")&&this.close(e.target)}},{key:"setEventListeners",value:function(){var e=this;this._popupSelector.querySelector(".popup__close-button").addEventListener("click",(function(){return e.close()}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},s.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function h(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleFormSubmit=r,t._form=t._popupSelector.querySelector(".popup__forms"),t._button=t._popupSelector.querySelector('button[type="submit"]'),t._buttonDefaultText=t._button.textContent,t._inputList=Array.from(t._form.querySelectorAll(".popup__item")),t}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;s(y(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"setUserUX",value:function(e){this._button.textContent=e?"Сохранение...":this._buttonDefaultText}},{key:"close",value:function(){s(y(a.prototype),"close",this).call(this),this._form.reset()}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=b(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function b(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}function S(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._title=t._popupSelector.querySelector(".popup__caption"),t._image=t._popupSelector.querySelector(".popup__image"),t}return t=a,(n=[{key:"open",value:function(e,t){m(g(a.prototype),"open",this).call(this),this._title.textContent=e,this._image.alt=e,this._image.src=t}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(t),this._about=document.querySelector(n),this.avatarUser=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._about.textContent=e.about,this.avatarUser.src=e.avatar,this.avatarUser.alt=e.name}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"profileEdit",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"editAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"addNewCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=I(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},R.apply(this,arguments)}function I(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}function q(e,t){return q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},q(e,t)}function U(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(o){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return U(this,e)});function a(e){var t=e.popupSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,t)}return t=a,(n=[{key:"setSubmitAction",value:function(e){this._handleSubmitCallback=e}},{key:"setEventListeners",value:function(){var e=this;R(T(a.prototype),"setEventListeners",this).call(this),this._popupSelector.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitCallback()}))}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var B,V=document.querySelector(".profile__edit-button"),D=document.querySelector(".popup__item-username"),F=document.querySelector(".popup__item-about"),N=document.querySelector(".profile__add-button"),X=document.querySelector(".popup__form-card"),J=document.querySelector(".profile__avatar-overlay"),G=new C({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-39",headers:{authorization:"7c23201b-b980-41a3-b675-2a551de25bb3","content-type":"application/json"}});Promise.all([G.getUserProfile(),G.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Q.setUserInfo(o),B=o._id,z.renderItems(i),console.log(o),console.log(i)})).catch((function(e){console.log(e)}));var H=new w(".popup-image");H.setEventListeners();var M=function(e){var n=new t(e.name,e.link,e.likes,e._id,B,e.owner._id,".card-template",(function(){H.open(e.name,e.link)}),(function(e){K.setSubmitAction((function(){G.deleteCard(e).then((function(){n.removeCard(),K.close()})).catch((function(){console.log("Ошибка удаления")}))})),K.open()}),(function(e){n.isLiked()?G.deleteLike(e).then((function(e){n.setLakes(e.likes)})).catch((function(){console.log("Ошибка снятия лайка")})):G.addLike(e).then((function(e){n.setLakes(e.likes)})).catch((function(){console.log("Ошибка постановки лайка")}))}));return n.generateCard()},z=new i({renderer:function(e){z.addItems(M(e))}},".elements__list"),$=new d({popupSelector:".popup-card",handleFormSubmit:function(e){$.setUserUX(!0),G.addNewCard(e).then((function(e){var t=M(e);z.addItem(t),$.close()})).catch((function(e){console.log(e)})).finally((function(){return $.setUserUX(!1)}))}});$.setEventListeners(),N.addEventListener("click",(function(){X.reset(),ee.addCard.restartFormValidation(),$.open()}));var K=new A({popupSelector:".popup-delete"});K.setEventListeners();var Q=new O(".profile__title",".profile__subtitle",".profile__avatar"),W=new d({popupSelector:".popup-profile",handleFormSubmit:function(e){W.setUserUX(!0),G.profileEdit(e).then((function(e){Q.setUserInfo(e),W.close()})).catch((function(e){console.log(e)})).finally((function(){return $.setUserUX(!1)}))}});W.setEventListeners(),V.addEventListener("click",(function(){var e=Q.getUserInfo();D.value=e.name,F.value=e.about,W.open(),ee.editProfile.restartFormValidation()}));var Y=new d({popupSelector:".popup-avatar",handleFormSubmit:function(e){G.editAvatar(e).then((function(e){Q.setUserInfo(e),Y.close()})).catch((function(e){console.log(e)}))}});Y.setEventListeners(),J.addEventListener("click",(function(){Y.open(),ee["popup-form-avatar"].restartFormValidation()}));var Z,ee={};Z={formSelector:".popup__forms",inputSelector:".popup__item",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__item_error",errorClass:"popup__input-error"},Array.from(document.querySelectorAll(Z.formSelector)).forEach((function(e){var t=new r(Z,e),n=e.getAttribute("name");ee[n]=t,t.enableValidation()}))})();