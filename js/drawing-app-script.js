'use strict';

// VARIABLES

const canvas = document.getElementById('canvas');
const newProjektBtn = document.getElementById('new-projekt');
const sizeInput = document.getElementById('size');
const colorInput = document.getElementById('color');

const context = canvas.getContext('2d');
let isMoseDown = false;
let color = '#000';
let size = 10;
let x, y;

// FUNCTIONS

function drawCircle(x, y) {
	context.beginPath();
	context.arc(x, y, size, 0, Math.PI * 2);
	context.fillStyle = color;
	context.fill();
}

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

// this eventListener activate function "clearProject"
newProjektBtn.addEventListener('click', clearProject);

// this event activate function "setLineSizeBasedOnInputValue()"
sizeInput.addEventListener('change', setLineSizeBasedOnInputValue);

// this event activate "function changecolor()"
colorInput.addEventListener('change', changeColor);

canvas.addEventListener('mousedown', function (e) {
	isMoseDown = true;

	x = e.offsetX;
	y = e.offsetY;
});

canvas.addEventListener('mousemove', function (e) {
	if (!isMoseDown) {
		return;
	}

	let x2 = e.offsetX;
	let y2 = e.offsetY;

	drawCircle(x2, y2);
	drawLine(x, y, x2, y2);

	x = x2;
	y = y2;
});

canvas.addEventListener('mouseup', function (e) {
	isMoseDown = false;

	x = null;
	y = null;
});