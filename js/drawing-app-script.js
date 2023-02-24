'use strict';

// VARIABLES

const canvas = document.getElementById('canvas');
const newProjektBtn = document.getElementById('new-projekt');
const sizeInput = document.getElementById('size');
const colorInput = document.getElementById('color');
const saveImg = document.getElementById('save-img');
let parentOfCanvas = canvas.parentNode;

const context = canvas.getContext('2d');
// This variable ("let rect") should be declared as "let" in case the size of the browser window changes.
let rect = canvas.getBoundingClientRect();
let isMouseDown = false;
let color = '#000';
let size = 10;
let x, y;

// FUNCTIONS

function setCanvasSize() {
	let canvasParentRect = parentOfCanvas.getBoundingClientRect();

	// this block calculates the sum of heights of other children of the canvas parent element
	let siblingsHeight = 0;
	let siblings = parentOfCanvas.children;
	for (let i = 0; i < siblings.length; i++) {
	  if (siblings[i] !== canvas) {
		siblingsHeight += siblings[i].offsetHeight;
	  }
	}
  
	// Set the height of the canvas to the height of its parent element without the height of its other children.
	canvas.height = canvasParentRect.height - siblingsHeight;
	canvas.width = canvasParentRect.width;
}

//
// this function make Background white
function makeBackgroundWhite() {
	context.fillStyle = 'white';
	context.fillRect(0, 0, canvas.width, canvas.height);
}

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

function saveImgFromCanvas() {
	const canvas = document.getElementById('canvas');
	const link = document.createElement('a');
	link.download = 'canvas.jpg';
	link.href = canvas.toDataURL('image/jpeg');
	link.click();
}

//
// Functions for MOBILE
// **********************
// **********************

//
// This function prevent scroling durig drawing
//  Chat GPT help
function preventTouchScrolling(e) {
	e.preventDefault();
}

function drawCircleMobile(x, y) {
	context.beginPath();
	context.arc(x, y, size, 0, Math.PI * 2);
	context.fillStyle = color;
	context.fill();
}

// this function starts drawing
// changes the value of let isMouseDown to true
// sets X and Y to the location where the touch event occurs.
function startDrawingMobile(e) {
	isMouseDown = true;

	x = e.touches[0].clientX - rect.left;
	y = e.touches[0].clientY - rect.top;
}

// this function draws a line from one point to another, where the canvas draws dots, so we have a continuous line.
// this function is called in the "constantLineDrawing()" function.

// **
// I DECIDED TO REMOVE THIS FUNCTION BECAUSE IT REPEATS ITSELF.
// **

// function drawLineMobile(x1, y1, x2, y2) {
// 	context.beginPath();
// 	context.moveTo(x1, y1);
// 	context.lineTo(x2, y2);
// 	context.strokeStyle = color;
// 	context.lineWidth = size * 2;
// 	context.stroke();
// }

//
// this function draws when the touch is moved
function constantLineDrawingMobile(e) {
	// Take the values (x,y) of the current touch location.

	let x2 = e.touches[0].clientX - rect.left;
	let y2 = e.touches[0].clientY - rect.top;

	drawCircle(x2, y2);
	drawLine(x, y, x2, y2);

	// first point become secont etc.
	x = x2;
	y = y2;
}

//
// this function changes the size of the line based on the value taken from the input of "toolbox__number"

// **
// I DECIDED TO REMOVE THIS FUNCTION BECAUSE IT REPEATS ITSELF.
// **

// function setLineSizeBasedOnInputValue() {
// 	size = document.getElementById('size').value;
// 	if (this.value <= 1) {
// 		this.value = 1;
// 	}

// 	drawCircle();
// 	drawLine();
// }

function stopDrawingMobile() {
	context.closePath();
}

setCanvasSize();
makeBackgroundWhite();

// EVENTS
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

saveImg.addEventListener('click', saveImgFromCanvas);

// Events for MOBILE

canvas.addEventListener('touchstart', startDrawingMobile);

canvas.addEventListener('touchmove', constantLineDrawingMobile);

canvas.addEventListener('touchend', startDrawingMobile);

canvas.addEventListener('touchmove', preventTouchScrolling, { passive: false });
