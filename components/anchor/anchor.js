
// function scrollToElement(elementId) {
// 	const element = document.getElementById(elementId);

// 	if (!element) {
// 		console.error("Элемент с указанным идентификатором не найден.");
// 		return;
// 	}

// 	let offset = element.offsetTop;
// 	console.log(offset);

// 	window.scrollTo({
// 		top: offset,
// 		behavior: 'smooth'
// 	});
// }

// // Вызов функции для прокрутки к элементу с идентификатором "lecture-description"
// function scrollToElement(elementId) {
// 	const element = document.getElementById(elementId);
// 	const lectureDescriptionHeight = element.getBoundingClientRect().height;
// 	console.log(lectureDescriptionHeight);
// 	let offset = lectureDescriptionHeight / 2
// 	element.scrollIntoView({
// 		behavior: 'smooth',
// 		// top: offset
// 	});

// 	// console.log(offset);
// }

// export function anchorElement() {
// 	document.querySelector('#btn-left').addEventListener('click', function () {
// 		scrollToElement('lecture-description');
// 	});
// }



function scrollToElement(elementId) {
	const element = document.getElementById(elementId);
	// const lectureDescriptionHeight = element.getBoundingClientRect().height;
	const windowTop = window.scrollY;
	const elementTop = element.getBoundingClientRect().top + windowTop;
	const elementMargins = window.getComputedStyle(element).marginTop;
	const marginTop = parseInt(elementMargins, 10);
	let offset = marginTop;
	const scrollTo = elementTop - offset;
	window.scrollTo({
		top: scrollTo,
		behavior: 'smooth'
	});
}

export function anchorElement() {
	document.querySelector('#btn-left').addEventListener('click', function () {
		scrollToElement('lecture-description');
	});


	document.querySelector('#btn-right').addEventListener('click', function () {
		scrollToElement('info-chess-session');
	});
}




