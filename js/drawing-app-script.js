'use strict';

// VARIABLES

const canvas = document.getElementById('canvas');
const newProjektBtn = document.getElementById('new-projekt');
const sizeInput = document.getElementById('size');
const colorInput = document.getElementById('color');

const context = canvas.getContext('2d');
let isMouseDown = false;
let color = '#000';
let size = 10;
let x, y;

// FUNCTIONS

// this function draws a basic circle in the canvas.
function drawCircle(x, y) {
	context.beginPath();
	context.arc(x, y, size, 0, Math.PI * 2);
	context.fillStyle = color;
	context.fill();
}

// this function starts drawing
// changes the value of let isMouseDown to true
// sets X and Y to the location where the mouse is.
function startDrawing(e) {
	isMouseDown = true;

	x = e.offsetX;
	y = e.offsetY;
}

// this function draws a line from one point to another, where the canvas draws dots, so we have a continuous line.
// fhis function is called in the "constantLineDrawing()" function.
function drawLine(x1, y1, x2, y2) {
	context.beginPath();
	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	context.strokeStyle = color;
	context.lineWidth = size * 2;
	context.stroke();
}

// this function clear everything from point 0,0, to last point of canvas - "toolbox__btn"
function clearProject() {
	context.clearRect(0, 0, canvas.width, canvas.height);
}

//
// this function draws when the mouse is down
function constantLineDrawing(e) {
	// if mouse is not doawn we quit
	if (!isMouseDown) {
		return;
	}

	// Take the values (x,y) of the current mouse location.

	let x2 = e.offsetX;
	let y2 = e.offsetY;

	drawCircle(x2, y2);
	drawLine(x, y, x2, y2);

	// first point become secont etc.
	x = x2;
	y = y2;
}

//
// this function stops drawing.
// "e" is not necessary
function stopDrawing() {
	isMouseDown = false;

	x = null;
	y = null;
}

//
// this function changes the size of the line based on the value taken from the input of "toolbox__number"
function setLineSizeBasedOnInputValue() {
	size = document.getElementById('size').value;
	if (this.value <= 1) {
		this.value = 1;
	}

	drawCircle();
	drawLine();
}

//
// this function changes the color of the line based on the value taken from the input of "toolbox__color"
function changeColor() {
	color = document.getElementById('color').value;
}

// EVENTS

canvas.addEventListener('touchstart', function(event) {
  // Zablokuj domyślne zachowanie przeglądarki
//   event.preventDefault();

  // take position of tuch
  const touchX = event.touches[0].pageX - canvas.offsetLeft;
  const touchY = event.touches[0].pageY - canvas.offsetTop;

  // star drowing
  context.beginPath();
  context.moveTo(touchX, touchY);
  context.strokeStyle = color;
});

canvas.addEventListener('touchmove', function(event) {
  // Zablokuj domyślne zachowanie przeglądarki
//   event.preventDefault();

  // Pobierz pozycję dotknięcia
  const touchX = event.touches[0].pageX - canvas.offsetLeft;
  const touchY = event.touches[0].pageY - canvas.offsetTop;

  // continue od drawing
  context.lineTo(touchX, touchY);
  context.stroke();
});

canvas.addEventListener('touchend', function(event) {
  // end of rowing
  context.closePath();
});









// EventLitener for desktop

// this eventListener activate function "clearProject"
newProjektBtn.addEventListener('click', clearProject);

// this event activate function "setLineSizeBasedOnInputValue()"
sizeInput.addEventListener('change', setLineSizeBasedOnInputValue);

// this event activate "function changecolor()"
colorInput.addEventListener('change', changeColor);

// this event activate "function startDrawing()"
canvas.addEventListener('mousedown', startDrawing);

// this event activate "function constantLineDrawing()"
canvas.addEventListener('mousemove', constantLineDrawing);

// this event activate "function stopDrawing"
canvas.addEventListener('mouseup', stopDrawing);
