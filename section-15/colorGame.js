console.log("colorGame.js loaded")

var colors = generateRandomColors(6);


var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	// Add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	// Add click listeners to squares
	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.backgroundColor;
		console.log(pickedColor, clickedColor)
		if(clickedColor === pickedColor){
			console.log("correct");
			messageDisplay.textContent = "Correct!";
			changeColors(pickedColor);
			h1.style.backgroundColor = pickedColor;
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again"
		}
	})
}

function changeColors(color){
	// loop through all squares 
	// change each color to match the given color
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generateRandomColors(num){
	// make an array 
	var arr = []
	// add num random colors to array
	for (var i = 0; i < num; i++) {
		// get random color and push into arr
		arr.push(randomColor())
	}
	// return that array
	return arr
}

function randomColor() {
	// pick a red from 0-255
	var r = Math.floor(Math.random() * 256)
	// pick a green from 0-255
	var g = Math.floor(Math.random() * 256)
	// pick a blue from 0-255
	var b = Math.floor(Math.random() * 256)
	return "rgb(" + r + ", " + g + ", " + b + ")";
}