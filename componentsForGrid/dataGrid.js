export let dataGrid = {
	offset: 0,
	gridWrap: document.querySelector(".grid-wrap"),
	gridItem: document.querySelector(".grid-item"),
	widthItem: 0, // ширина элемента
	numberItem: 0, // количество элементов
	buttonElementRight: document.querySelector(".btn-grid-right"),
	buttonElementLeft: document.querySelector(".btn-grid-left"),
	circleBlock: document.querySelector(".block-pagination-circles"),
	numberCircle: 0, // количество элементов
	circleElements: document.querySelectorAll(".block-pagination-circles span"),
	currentIndex: 0,
	colorYellow: "rgb(251, 206, 81)"

}
/*  */

dataGrid.widthItem = dataGrid.gridItem.clientWidth;
dataGrid.numberItem = dataGrid.gridWrap.childElementCount;
dataGrid.numberCircle = dataGrid.circleBlock.childElementCount;

export function buttonRightScroll() {
	if (dataGrid.offset >= (dataGrid.numberCircle - 2) * (dataGrid.widthItem + 20)) {
		dataGrid.offset = (dataGrid.numberCircle - 2) * (dataGrid.widthItem + 20);
	}
	dataGrid.offset = dataGrid.offset + dataGrid.widthItem + 20;
	dataGrid.gridWrap.style.left = -dataGrid.offset + "px";
	newCurrentRight()

}

export function buttonLeftScroll() {
	if (dataGrid.offset <= 0) {
		dataGrid.offset = dataGrid.widthItem + 20;
	}
	dataGrid.offset = dataGrid.offset - dataGrid.widthItem - 20;
	dataGrid.gridWrap.style.left = -dataGrid.offset + "px";
	newCurrentLeft()
}



// Функция обновления состояния кнопки
function conditionButtonGrid(indexElement) {
	dataGrid.circleElements.forEach((element, i) => {
		if (indexElement === i) {
			if (i === dataGrid.circleElements.length - 1) {
				dataGrid.buttonElementRight.style.backgroundColor = "#D6D6D6";
			} else {
				dataGrid.buttonElementRight.style.backgroundColor = "#313131";
			}
			if (i > 0) {
				dataGrid.buttonElementLeft.style.backgroundColor = "#313131";
			} else {
				dataGrid.buttonElementLeft.style.backgroundColor = "#D6D6D6";
			}
		}
	});
}
// Функция обновления активного круга в пагинации
function updatePagination(index) {
	dataGrid.circleElements.forEach((circle, i) => {
		if (i === index) {
			circle.classList.add("active");
		} else {
			circle.classList.remove("active");
		}
	});
}

//  события для кнопки влево
function newCurrentLeft() {
	dataGrid.currentIndex = Math.max(dataGrid.currentIndex - 1, 0);
	updatePagination(dataGrid.currentIndex);
	conditionButtonGrid(dataGrid.currentIndex);
}
//  события для кнопки вправо
function newCurrentRight() {
	dataGrid.currentIndex = Math.min(dataGrid.currentIndex + 1, dataGrid.circleElements.length - 1);
	updatePagination(dataGrid.currentIndex);
	conditionButtonGrid(dataGrid.currentIndex);
}


function newOffsetResize() {
	window.addEventListener("resize", () => {
		dataGrid.widthItem = dataGrid.gridItem.clientWidth;
		if (dataGrid.offset <= 0) {
			dataGrid.gridWrap.style.left = '';
		} else {
			dataGrid.gridWrap.style.left = '';
			dataGrid.offset = (dataGrid.widthItem + 20) * dataGrid.currentIndex
			dataGrid.gridWrap.style.left = -dataGrid.offset + "px";
		}
	})
}
newOffsetResize()

export const attachMobileHoverEvents = (button, color) => {
	button.addEventListener('mousedown', function () {
		button.style.backgroundColor = color;
	});

	button.addEventListener('mouseup', function () {
		button.style.backgroundColor = '';
	});
}