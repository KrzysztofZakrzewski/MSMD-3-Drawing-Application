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