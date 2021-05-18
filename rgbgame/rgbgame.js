var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll('.square');
var colorDisplay = document.querySelector('#colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButton = document.querySelectorAll('.mode');

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
//Mode Buttons Event Listeners
for (var i = 0; i < modeButton.length; i++) {
	modeButton[i].addEventListener('click', function(){
		modeButton[0].classList.remove('selected');
		modeButton[1].classList.remove('selected');
		this.classList.add('selected');
		this.textContent === 'Easy' ? numberOfSquares =3: numberOfSquares = 6;
		reset();
	})
}
}

function setupSquares(){
//Square Event Listeners
for (var i = 0; i < squares.length; i++) {
//Add click listener to squares
squares[i].addEventListener('click', function(){
	var clickedColor = this.style.background;

	if(clickedColor === pickedColor){
		messageDisplay.textContent = 'Correct!';
		changeColors(pickedColor);
		h1.style.background = pickedColor;
		resetButton.textContent = "Play Again?"
	}else{
		this.style.background = '#232323';
		messageDisplay.textContent = "Try Again"
	}
})
}
}

//Picks colors & Changes text content
function reset(){
	messageDisplay.textContent = '';
	resetButton.textContent = 'New Colors'
//Generate new colors
colors = generateRandomColor(numberOfSquares);
//New winning color
pickedColor = pickColor();
//New text for color
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	if(colors[i]){
		squares[i].style.display = 'block';
		//Add color to squares
		squares[i].style.background = colors[i];
	}else{
		//Hide squares
		squares[i].style.display = 'none';
	}
}
h1.style.background = 'steelblue'
}

resetButton.addEventListener('click', function(){
	reset();
})

function changeColors (color){

	for (var i = 0; i < squares.length; i++) {
	//Change all squares to correct color
	squares[i].style.background = color;
}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num){
	var arr = [];
//pushes random rgb into array
for(var i = 0; i<num; i++){
	arr.push(randomColor());
}

return arr;
};

function randomColor (){
	var red = Math.floor(Math.random()* 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);

	return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}