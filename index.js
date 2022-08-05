const modalRed = document.getElementById("modal-container");
const modalContentGray = document.querySelector('#modal-container2');
const buttonRed = document.getElementById("modalbtn");
const buttonGray = document.getElementById("hero__cta-gray");
const close = document.querySelector('.hide-modal')

buttonRed.onclick = function () {
    modalRed.style.display = "block"
}

