// the modal
const modal = document.getElementById('modal-container');
// button to open the modal
const openModal = document.getElementById('info1');
// button to close the modal
const closeModal = document.getElementById("close-btn");

// When the user clicks on the button, open the modal
openModal.onclick = function() {
    console.log('yes');
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeModal.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}