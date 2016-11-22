console.log("ahoy!");

var greeting = "ahoy!";

var quack = new Audio("quack.mp3");

var paragraph = document.getElementById("my-paragraph");

paragraph.innerHTML = greeting;


var randomNumberParagraph = document.getElementById("random-number");

var randomNumberButton = document.getElementById("get-random");
randomNumberButton.addEventListener("click", getRandomNumber);

function getRandomNumber() {
	var randomNumber = Math.floor(Math.random() * 10) + 1;

	randomNumberParagraph.innerHTML = randomNumber;

	quack.play();
}
