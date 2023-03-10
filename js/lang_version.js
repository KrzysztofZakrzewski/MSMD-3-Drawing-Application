// Take all ratio elements with name "option"

// Options Popup
const radioButtons = document.getElementsByName('option');
const h1OptLang = document.querySelector('.h1_opt_lang');
const dicription = document.querySelector('.p1_discription_lang');
const pSizeOptLang = document.querySelector('.p_size_opt_lang');
const pColorOptLang = document.querySelector('.p_color_opt_lang');
const buttonOptClearLang = document.querySelector('.button_opt_clear_lang')
const buttonSaveOptLang = document.querySelector('.button_save_opt_lang');
const buttonCloseOptLang = document.querySelector('.button_close_opt_lang');

// Infopopup
const h1InfoLang = document.querySelector('.h1_info_lang');
const p1DiscriptionLang = document.querySelector('.p1_discription_lang');
const p1InfoSize = document.querySelector('.p1_info_size');
const p2InfoSizeLang = document.querySelector('.p2_info_size_lang');
const p1InfoColorLang = document.querySelector('.p1_info_color_lang');
const p2InfoColorLang = document.querySelector('.p2_info_color_lang');
const p1InfoClearLang = document.querySelector('.p1_info_clear_lang');
const deafButtonInfoClearLang = document.querySelector('.deaf_button_info_clear_lang')
const p2InfoClearLang = document.querySelector('.p2_info_clear_lang');
const p1InfoSaveLang = document.querySelector('.p1_info_save_lang');
const deafButtonInfoSaveLang = document.querySelector('.deaf_button_info_save_lang')
const p2InfoSaveLang = document.querySelector('.p2_info_save_lang');
const p1InfoOptionsLang = document.querySelector('.p1_info_options_lang');
const deafButtonInfoOptLang = document.querySelector('.deaf_button_info_opt_lang')
const p2InfoOptionsLang = document.querySelector('.p2_info_options_lang');
const p1WaringInfoLang = document.querySelector('.p1_waring_info_lang');
const p2WaringInfoLang = document.querySelector('.p2_waring_info_lang');
const buttonInfoCloseLang = document.querySelector('.button_info_close_lang');

function translateForEnglish() {
	h1OptLang.textContent = 'Options';
	pSizeOptLang.textContent = 'Size:';
	pColorOptLang.textContent = 'Color:';
    buttonOptClearLang.textContent = 'Clear'
	buttonSaveOptLang.textContent = 'Save';
	buttonCloseOptLang.textContent = 'Close';
	h1InfoLang.textContent = 'Instructions';
	p1DiscriptionLang.textContent =
		'This is an application used for quickly creating small images that can be saved to disk or phone, sent to a friend, or used however you like.';
	p1InfoSize.textContent = 'Size:';
	p2InfoSizeLang.textContent =
		'It is used to select the size of the drawn line.';
	p1InfoColorLang.textContent = 'Color:';
	p2InfoColorLang.textContent =
		'It is used to select the color of the drawn line.';
	p1InfoClearLang.textContent = 'Button:';
    deafButtonInfoClearLang.textContent = 'Clear'
    p2InfoClearLang.textContent = 'It is used to erase the entire drawing that we have already made.'

	p1InfoSaveLang.textContent = 'Button:';
    deafButtonInfoSaveLang.textContent = 'Save'
	p2InfoSaveLang.textContent =
		'It is used to save our image to the disk or phone.';
	p1InfoOptionsLang.textContent = 'Botton:';
    deafButtonInfoOptLang.textContent = 'Options'
	p2InfoOptionsLang.textContent = 'It is used to open a window with options.';
	p1WaringInfoLang.textContent = 'Warning';
	p2WaringInfoLang.textContent =
		'If the resolution changes while drawing, for example, by rotating the phone or tablet, the drawing will be erased as if you had used the Clear button.';
	buttonInfoCloseLang.textContent = 'Close';
}

function translateForPolish() {
	h1OptLang.textContent = 'Opcje';
	pSizeOptLang.textContent = 'Rozmiar:';
	pColorOptLang.textContent = 'Kolor:';
    buttonOptClearLang.textContent = 'Wyczyść'
	buttonSaveOptLang.textContent = 'Zapisz';
	buttonCloseOptLang.textContent = 'Zamknij';
	h1InfoLang.textContent = 'Instrukcje';
	p1DiscriptionLang.textContent =
		'To jest aplikacja do szybkiego tworzenia małych obrazków, które można zapisać na dysku lub telefonie, przesłać do znajomego lub użyć w dowolny sposób.';
	p1InfoSize.textContent = 'Rozmiar:';
	p2InfoSizeLang.textContent = 'Służy do wyboru rozmiaru rysowanej linii.';
	p1InfoColorLang.textContent = 'Kolor:';
	p2InfoColorLang.textContent = 'Służy do wyboru koloru rysowanej linii.';
    p1InfoClearLang.textContent = 'Przycisk:';
    deafButtonInfoClearLang.textContent = 'Wyczyść'
    p2InfoClearLang.textContent = 'Służy do wymazywania całego rysunku, kóry już narysowaliśmy.'
	p1InfoSaveLang.textContent = 'Przycisk:';
    deafButtonInfoSaveLang.textContent = 'Zapisz'
	p2InfoSaveLang.textContent =
		'Służy do zapisywania naszego obrazu na dysku lub telefonie.';
	p1InfoOptionsLang.textContent = 'Przycisk:';
    deafButtonInfoOptLang.textContent = 'Opcje'
	p2InfoOptionsLang.textContent = 'Służy do otwierania okna z opcjami.';
	p1WaringInfoLang.textContent = 'Uwaga';
	p2WaringInfoLang.textContent =
		'Jeśli rozdzielczość zmieni się podczas rysowania, na przykład przez obrócenie telefonu lub tabletu, rysunek zostanie wymazany, tak jakbyś użył przycisku Wyczyść.';
	buttonInfoCloseLang.textContent = 'Zamknij';
}


radioButtons.forEach((button) => {
	button.addEventListener('change', function () {
		// Chec wich ratio element is marked and execute langue function
		switch (this.value) {
			case 'option1':
				// engish
				//   changeLanguageContent("Selected", "", "");
				console.log('eng');
				translateForEnglish();

				break;
			case 'option2':
				// polish
				//   changeLanguageContent("", "Wybrano", "");
				console.log('pl');
				translateForPolish();
				break;
			case 'option3':
				// ukrainian
				//   changeLanguageContent("", "", "Обрано");
				console.log('ekr');
				break;
			default:
				// defolt statement
				console.log('unknown choice');
		}
	});
});
