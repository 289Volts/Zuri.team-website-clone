const data = [
	{
		name: "modal-one",
		title: "Zuri Internship Is Optional",
		content:
			"The Zuri Internship is another level of training that places the participants in a work simulation. It is not paid work; it’s a short training program to get participants ready for actual jobs. There will be cash rewards for a job well done.",
	},
	{
		name: "modal-two",
		title: "Laptop Reward <br>(Upgrade Or New One)",
		content:
			"We will be working with our partners on how to get laptops for exceptional participants who genuinely need a better device. This is not for everyone, and we will only do this if we can get partners to fund or donate.",
	},
	{
		name: "modal-three",
		title: "Job Reward",
		content:
			"This is a beginner-focused program; we will not be exclusively recommending everyone for jobs or job placement. We will not be placing everyone in our talent pool. We will se lect very few who are exceptional, smart and able to out-perform their pairs and recommend them for possible employment or further internships. You might still have to go through other forms of interview depending on the employer",
	},
	{
		name: "modal-four",
		title: "More Training",
		content:
			"We will be partnering with more companies to provide more training to participants in this track. However, this is subject to the partners. If we cannot get partners in any of the items listed below, we will not be doing the training.",
	},
];

handleOpenModal = (e) => {
    const modal = document.querySelector("#modal-container");

  //   find the index of the data for be inserted into the modal element using the id of the icon that fired the modal open event
  const findIndex = data.findIndex((item) => item.name === e.target.id);

  //   insert the modal element title and body using the index found above
  modal.querySelector("#modal-title").innerHTML = data[findIndex].title;
  modal.querySelector("#modal-body").innerHTML = data[findIndex].content;

  modal.style.display = "block";
};

handleCloseModal = () => {
  const modal = document.querySelector("#modal-container");
  modal.style.display = "none";
};