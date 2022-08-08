// the modal
const modal = document.getElementById('modal-container');
const modalB = document.getElementsByClassName('modal-container-Two');
const modalC = document.getElementsByClassName('modal-container-Three');
const ModalD = document.getElementsByClassName('modal-container-Four');

// button to open the modal
const openModal = document.getElementById('info1');
const openModalTwo = document.getElementById('info2');
const openModalThree = document.getElementById('info3');
const openModalFour = document.getElementById('info4');

// button to close the modal
const closeModal = document.getElementById("close-btn");
const closeModalTwo = document.getElementById("close-btn2");
const closeModalThree = document.getElementById("close-btn3");
const closeModalFour = document.getElementById("close-btn4");

// When the user clicks on the button, open the modal
openModal.onclick = function () {
    modal.style.display = "block";
}
openModalTwo.onclick = function () {
    modalB.style.display = "block";
}
openModalThree.onclick = function () {
    modalC.style.display = "block";
}
openModalFour.onclick = function () {
    ModalD.style.display = "block";
}


// When the user clicks on X, close the modal
closeModal.onclick = function () {
    modal.style.display = "none";
}
closeModalTwo.onclick = function () {
    modalB.style.display = "none";
}
closeModalThree.onclick = function () {
    modalC.style.display = "none";
}
closeModalFour.onclick = function () {
    ModalD.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
window.onclick = function (event) {
    if (event.target == modalB) {
        modalB.style.display = "none";
    }
}
window.onclick = function (event) {
    if (event.target == ModalC) {
        modalC.style.display = "none";
    }
}
window.onclick = function (event) {
    if (event.target == ModalD) {
        ModalD.style.display = "none";
    }
}