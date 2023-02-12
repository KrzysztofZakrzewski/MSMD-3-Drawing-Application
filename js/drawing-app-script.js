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

// EVENTS

// this function clear everything from point 0,0, to last point of canvas
newProjektBtn.addEventListener('click', function (e) {
	context.clearRect(0, 0, canvas.width, canvas.height);
});

// change size of drawiing line by taking value of input "size"
sizeInput.addEventListener('change', function (e) {
	size = document.getElementById('size').value;
});

// change color of drawiing line by taking value of input "color"
colorInput.addEventListener('change', function (e) {
	color = document.getElementById('color').value;
});

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

window.addEventListener('resize', setCanvasSize);
setCanvasSize();
