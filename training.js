// const modal = document.getElementById("modal-container");
// const modal2 = document.getElementsByClassName("modal-container-Two");


// function openModal() {
//     modal.style.display = "block";
//     console.log('work');
// }
// function openModal2() {
//     modal2.style.display = "block";
//     console.log('work1');
// }[1]
// function openModal3()  {
//     console.log('work2');
// }
// function openModal4() {
//     console.log('work3');
// }


const triggers = document.getElementsByClassName("info-btn");
const triggerArray = Array.from(triggers).entries();
const modals = document.getElementsByClassName("modal");
const closeButtons = document.getElementsByClassName("closebtn");

for (let [index, trigger] of triggerArray) {
	const toggleModal = () => {
		// modals[index].classList.toggle("show-modal");
		modals[index].style.display = "block";
	};
	// trigger.addEventListener("click", toggleModal);
	// closeButtons[index].addEventListener("click", toggleModal);
}