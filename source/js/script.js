//переключение меню
let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

// popup

const buttonsOpenPopup = document.querySelectorAll(".button--open-popup");
const popup = document.querySelector(".popup");
const popupForm = popup.querySelector(".popup__form");
const phoneInput = popup.querySelector("[id=phone]");
const mailInput = popup.querySelector("[id=mail]");
const buttonClosePopup = popup.querySelector(".popup__close");
const successMessage = popup.querySelector(".success");

buttonsOpenPopup.forEach(btn => {

  btn.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("popup--closed");
    popup.classList.add("popup--opened");
    phoneInput.focus();
  });

  buttonClosePopup.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("popup--opened");
    popup.classList.add("popup--closed");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.key === "Esc" || evt.key === "Escape") {
      if (popup.classList.contains("popup--opened")) {
        evt.preventDefault();
        popup.classList.remove("popup--opened");
        popup.classList.add("popup--closed");
      }
    }
  });

});

// tabs

const btnTabs = document.querySelectorAll(".tabs__button");
const itemTabs= document.querySelectorAll(".tabs__item");
const placeTabs = document.querySelectorAll(".place-card__link ")

btnTabs.forEach(tab => {
  tab.addEventListener("click", function() {
    let currentBtn = tab;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId)

    btnTabs.forEach(btn => {
      btn.classList.remove("tabs__button--active");
    });

    itemTabs.forEach(item => {
      item.classList.remove("tabs__item--active");
    });

    currentBtn.classList.add("tabs__button--active");
    currentTab.classList.add("tabs__item--active");
  });
});

placeTabs.forEach(place => {
  place.addEventListener("click", function() {
    let currentPlace = place;
    let placeId = currentPlace.getAttribute("data-link");
    let currentTab = document.querySelector(placeId);

    itemTabs.forEach(item => {
      item.classList.remove("tabs__item--active");
    });

    btnTabs.forEach(btn => {
      let btnId = btn.getAttribute("data-tab");
      if (placeId === btnId){
        btn.classList.add("tabs__button--active");
      }else {
        btn.classList.remove("tabs__button--active");
      }
      currentTab.classList.add("tabs__item--active");
    });
  });
});
