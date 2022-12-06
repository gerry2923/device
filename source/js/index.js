let searchFormInput = document.querySelector(".site-search__input");

let searchFormWrapper = document.querySelector(".site-search__form-wrapper");
let searchFormButton = document.querySelector(".site-search__button");

// check if new class has added; if so, then change styles of three elements
function addInputBorderStyle() {
	searchFormWrapper.style.borderBottom = "2px solid black";
}

function removeInputBorderStyle() {
	searchFormWrapper.style.borderBottom = "2px solid transparent";
}

// add event listener to change border-bottom of form
searchFormInput.addEventListener('focus', addInputBorderStyle);
searchFormInput.addEventListener('focusout', removeInputBorderStyle);

const catalogMenuBtn = document.querySelector('.catalog-menu__btn');
const catalogMenuList = document.querySelector('.catalog-menu__list');
const promo = document.querySelector('.promo');
const popular = document.querySelector('.popular');

catalogMenuBtn.addEventListener('click', ()=> {
	if(catalogMenuList.classList.contains("hide")) {
		catalogMenuList.classList.remove("hide");
		console.log("remove hide");
		promo.style.top = "0px";
		popular.style.marginTop = "49px";
	} else {
		catalogMenuList.classList.add("hide");
		console.log("add hide");
		promo.style.top = "-159px";
		popular.style.marginTop = "-110px";
	}
	
});

//  ИЗМЕНЕНИЕ СЕРВИСОВ 
const servicesForm = document.querySelector('.services__menu');
const servicesInputList = document.querySelectorAll('.services__menu-item input[type="radio"]');
const servicesDescrList = document.querySelector('.services__list');
const servicesItemList = document.querySelectorAll('.services__item');

let currentServiceInputElem = "";

servicesInputList.forEach(elem => {
	
// check what is current now by default
	if(elem.checked) {
		elem.parentNode.style.backgroundColor = "black";
		elem.parentNode.querySelector('input[type="radio"]+.services__label').style.color = "#F7E296";
		currentServiceInputElem = elem;
	}

// set EventListeners of every input elem

	elem.addEventListener('change', (evt) => {
	// делаем два раза одно и тоже, только с разными элементами => можно вынести в отдельную функцию (РЕФАКТОРИНГ)

		// 1. изменяем стиль input, который был активным на неактивный
			currentServiceInputElem.checked = false;
			currentServiceInputElem.parentNode.style.backgroundColor = "transparent";
			currentServiceInputElem.parentNode.querySelector('input[type="radio"]+.services__label').style.color = "black";
			
			// удаляем активный класс 
			servicesItemList[+currentServiceInputElem.value].classList.remove('services__item_active');
			currentServiceInputElem = evt.target;

		// 2. добавляем активный класс и изменяем стиль кнопки на активный 
			let pNode = evt.target.parentNode;
			pNode.style.backgroundColor = "black"
			pNode.querySelector('input[type="radio"]+.services__label').style.color = "#F7E296";
			servicesItemList[+evt.target.value].classList.add('services__item_active');

		});

});

//  Пагинация в промо-блоке ---СТАРТ------------------------------

	const promoItemList = document.querySelectorAll('.promo_item.promo-card');
	const paginationList = document.querySelectorAll('.pagination .pagination__button');
	let currentItemIndex = '2';
	let promoListCurrentItemNumber = document.querySelector(":root");

	paginationList.forEach(item => {
		item.classList.forEach(name => {
			if (name === 'active') {
				currentItemIndex = item.textContent;
			}
		});
	});

	paginationList.forEach(item => {
		item.addEventListener('click', changePromoItem);
	});

	function changePromoItem(evt) {
		let newItemIndex = evt.target.textContent;
		
		if(newItemIndex !== currentItemIndex) {

			promoItemList[+currentItemIndex - 1].classList.add('hide');
			promoItemList[+newItemIndex - 1].classList.remove('hide');

			paginationList[+currentItemIndex - 1].classList.remove('active');
			evt.target.classList.add('active');

			promoListCurrentItemNumber.style.setProperty('--pseudo-text', `"0${newItemIndex}"`);

			currentItemIndex = newItemIndex;
		}
	}
//  Пагинация в промо-блоке ---ФИНИШ------------------------------

/**

	//  modal map ---- start ----

		const miniMap = document.querySelector(".contacts__mini-map");
		const modalMap = document.querySelector('.modal-map');
		const modalMapButton = modalMap.querySelector('.button_close');
		miniMap.addEventListener('click', openBigMap);
		modalMapButton.addEventListener('click', closeBigMap);

		function openBigMap() {
			modalMap.style.display = 'block';
		}

		function closeBigMap() {
			modalMap.style.display = "none";
		}
	//  modal map ---- finish ---

	// write us --- start ----
		const writeUsButton = document.querySelector(".write-us");
		const modalWriteUs = document.querySelector(".modal-write-us");

		const modalWriteUsButton = modalWriteUs.querySelector(".button_close");

		writeUsButton.addEventListener('click', openWriteUsForm);
		modalWriteUsButton.addEventListener('click', closeModalWriteUs);

		function openWriteUsForm(){
			modalWriteUs.style.display = "block";
		}

		function closeModalWriteUs() {
			modalMap.style.display = "none";
		}


	// write us --- finish ---

*/

// price-filter start ------
	
	console.log('changing price filter');

	

// price-filter finish -------