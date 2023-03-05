'use strict';

// Variables;


const closePopupInfoBtn = document.querySelector('.close-popup-info__btn');

const popupInfo = document.querySelector('.popup-info');
const popupInfoActive = document.querySelector('.popup-info-active');

function closePopupInfo() {
	if (popupInfo.classList.contains('popup-info-active')) {
		popupInfo.classList.remove('popup-info-active');
	}
}

closePopupInfoBtn.addEventListener('click', closePopupInfo);
