const discountContainer = document.querySelector(".houses__discount-container");
const discountItem = document.querySelector(".houses__icon_type_discount");
const mapButton = document.querySelector(".location__infrastructure-button");
const popupButton = document.querySelector(".location-popup__infrastructure-button");
const mapPopup = document.querySelector(".location-popup");
const popupCheckButtons = Array.from(document.querySelectorAll(".location-popup__button"));
const showFormCheckButton = document.querySelector(".showing__button");
const showMenuButton = document.querySelector(".header__burger-button");
const closeMenuButton = document.querySelector(".header__burger-close-button");
const headerMenu = document.querySelector(".header__burger-menu");
const firstFooterOpenButton = document.querySelector(".footer__open-button_type_novostroy");
const firstFooterCloseButton = document.querySelector(".footer__close-button_type_novostroy");
const firstFooterLinks = document.querySelector(".footer__column-links_content_novostroy");
const secondFooterOpenButton = document.querySelector(".footer__open-button_type_popular");
const secondFooterCloseButton = document.querySelector(".footer__close-button_type_popular");
const secondFooterLinks = document.querySelector(".footer__column-links_content_popular");

function showDiscount() {
  discountContainer.classList.add("houses__discount-container_shown");
}

function hideDiscount() {
  discountContainer.classList.remove("houses__discount-container_shown");
}

function togglePopup() {
mapPopup.classList.toggle("location-popup_shown");
}

function addCheck() {
  popupCheckButtons.forEach((button) => {
    button.addEventListener('click', function() {
      button.classList.toggle("location-popup__button_checked");
    })
  })
}

function toggleFormCheck() {
  showFormCheckButton.classList.toggle("showing__button_checked");
}

function showMenu() {
  headerMenu.classList.add("display");
  showMenuButton.classList.add("no-display");
  closeMenuButton.classList.remove("display");
  closeMenuButton.classList.add("display");
}

function hideMenu() {
  headerMenu.classList.remove("display");
  showMenuButton.classList.remove("no-display");
  closeMenuButton.classList.remove("display");
}

function showFooter(links, openButton, CloseButton) {
  links.classList.add("display-grid");
  openButton.classList.add("no-display");
  CloseButton.classList.add("display-grid");
}

function hideFooter(links, openButton, CloseButton) {
  links.classList.remove("display-grid");
  openButton.classList.remove("no-display");
  CloseButton.classList.remove("display-grid");
}

discountItem.addEventListener("mouseover", showDiscount);
discountItem.addEventListener("mouseout", hideDiscount);
mapButton.addEventListener("click", togglePopup);
popupButton.addEventListener("click", togglePopup);
showFormCheckButton.addEventListener("click", toggleFormCheck);
showMenuButton.addEventListener("click", showMenu);
closeMenuButton.addEventListener("click", hideMenu);
firstFooterOpenButton.addEventListener("click", () => showFooter(firstFooterLinks, firstFooterOpenButton, firstFooterCloseButton));
firstFooterCloseButton.addEventListener("click", () => hideFooter(firstFooterLinks, firstFooterOpenButton, firstFooterCloseButton));
secondFooterOpenButton.addEventListener("click", () => showFooter(secondFooterLinks, secondFooterOpenButton, secondFooterCloseButton));
secondFooterCloseButton.addEventListener("click", () => hideFooter(secondFooterLinks, secondFooterOpenButton, secondFooterCloseButton));
addCheck();