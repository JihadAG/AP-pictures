let navToggle = document.querySelector(".nav__toggle");
let navWrapper = document.querySelector(".nav__wrapper");

navToggle.addEventListener("click", function () {
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
  } else {
    navWrapper.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
});
//////////////////////////////////////////////login-popup//////////////////////////////////////////////
let popup = document.getElementById("pop-up");
function openPopup(){
  popup.classList.add("open-popup");
}
function closePopup(){
  popup.classList.remove("open-popup");
}
////////////////////////////////////////////// Popup-1 //////////////////////////////////////////////
let popup1 = document.getElementById("pop-up1");
let popup2 = document.getElementById("pop-up2");
let popup3 = document.getElementById("pop-up3");
let popup4 = document.getElementById("pop-up4");


function openPopup1(){
  popup1.classList.add("open-popup");
}
function openPopup2(){
  popup2.classList.add("open-popup");
}
function openPopup3(){
  popup3.classList.add("open-popup");
}
function openPopup4(){
  popup4.classList.add("open-popup");
}
function closePopup1(){
  popup1.classList.remove("open-popup");
}
function closePopup2(){
  popup2.classList.remove("open-popup");
}
function closePopup3(){
  popup3.classList.remove("open-popup");
}
function closePopup4(){
  popup4.classList.remove("open-popup");
}