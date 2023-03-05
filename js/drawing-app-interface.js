'use strict';

// Variables;

const closePopupInfoBtn = document.querySelector('.close-popup-info__btn');
const closeOptionsBtn = document.querySelector('.close-popup-options__btn');
const openOption = document.querySelector('.options')

const popupInfo = document.querySelector('.popup-info');
const popupOptions = document.querySelector('.popup-options');
const popupInfoActive = document.querySelector('.popup-info-active');

//this function toggle info popup
function closePopupInfo() {
	popupInfo.classList.toggle('popup-info-active');
}

// this function toggle option popup
function toggleOptionsPopup() {
	popupOptions.classList.toggle('popup-options-active')
}

closePopupInfoBtn.addEventListener('click', closePopupInfo);
closeOptionsBtn.addEventListener('click', toggleOptionsPopup)
openOption.addEventListener('click', toggleOptionsPopup)