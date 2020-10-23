const discountContainer = document.querySelector(".houses__discount-container");
const discountItem = document.querySelector(".houses__icon_type_discount");
const mapButton = document.querySelector(".location__infrastructure-button");
const popupButton = document.querySelector(".location-popup__infrastructure-button");
const mapPopup = document.querySelector(".location-popup");
const popupCheckButtons = Array.from(document.querySelectorAll(".location-popup__button"));

console.log(popupCheckButtons);

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

discountItem.addEventListener("mouseover", showDiscount);
discountItem.addEventListener("mouseout", hideDiscount);
mapButton.addEventListener("click", togglePopup);
popupButton.addEventListener("click", togglePopup);
addCheck();