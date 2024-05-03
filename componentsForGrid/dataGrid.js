/* ------------------------------------------ */
let offset = 0;
const gridWrap = document.querySelector(".grid-wrap");
const gridItem = document.querySelector(".grid-item");
let widthItem = gridItem.clientWidth; // ширина элемента
let numberItem = gridWrap.childElementCount; // количество элементов
const buttonElementRight = document.querySelector(".btn-grid-right");
const buttonElementLeft = document.querySelector(".btn-grid-left");
const circleBlock = document.querySelector(".block-pagination-circles");
let numberCircle = circleBlock.childElementCount; // количество элементов
const circleElement = document.querySelectorAll(".block-pagination-circles span");
let currentIndex = 0;

/*  */
/*  */
// Ваш код из второго модуля
export function buttonLeftScroll() { 
  buttonElementRight.addEventListener("click", () => { 
    buttonElementRight.style.backgroundColor = "#313131"; 
    if (offset >= (numberItem - 2) * (widthItem + 20)) { 
      offset = (numberItem - 2) * (widthItem + 20); 
    } 
    offset = offset + widthItem + 20; 
    gridWrap.style.left = -offset + "px"; 
  }); 
  console.log(1); 
}




/*  */
buttonElementLeft.addEventListener("click", () => {
	if (offset <= 0) {
		offset = widthItem + 20;
	}
	offset = offset - widthItem - 20;
	gridWrap.style.left = -offset + "px";
});
/* ++++++++++++++++++++++ */

// Функция обновления состояния кнопки
function conditionButtonGrid(indexElement) {
	circleElement.forEach((element, i) => {
		if (indexElement === i) {
			if (i === circleElement.length - 1) {
				buttonElementRight.style.backgroundColor = "#D6D6D6";
			} else {
				buttonElementRight.style.backgroundColor = "#313131";
			}
			if (i > 0) {
				buttonElementLeft.style.backgroundColor = "#313131";
			} else {
				buttonElementLeft.style.backgroundColor = "#D6D6D6";
			}
		}
	});
}
// Функция обновления активного круга в пагинации
function updatePagination(index) {
	circleElement.forEach((circle, i) => {
		if (i === index) {
			circle.classList.add("active");
		} else {
			circle.classList.remove("active");
		}
	});
}
// Обработчик события для кнопки влево
buttonElementLeft.addEventListener("click", () => {
	currentIndex = Math.max(currentIndex - 1, 0);
	updatePagination(currentIndex);
	conditionButtonGrid(currentIndex);
});
// Обработчик события для кнопки вправо
buttonElementRight.addEventListener("click", () => {
	currentIndex = Math.min(currentIndex + 1, circleElement.length - 1);
	updatePagination(currentIndex);
	conditionButtonGrid(currentIndex);
});

buttonElementRight.addEventListener("mousedown", function () {
	buttonElementRight.style.backgroundColor = "rgb(251, 206, 81)";
});
buttonElementLeft.addEventListener("mousedown", function () {
	buttonElementLeft.style.backgroundColor = "rgb(251, 206, 81)";
});

/* 111111111111111111111111111111111111111111 */

const myBtn = document.querySelector(".button-left");
function handleResize() {
	const screenWidth = window.innerWidth;
	if (screenWidth >= 768) {
		myBtn.addEventListener("mouseover", () => {
			myBtn.style.background = "rgb(251, 206, 81)";
		});
		myBtn.addEventListener("mouseout", () => {
			myBtn.style.background = "rgb(31, 31, 31)";
		});
	}
}
window.addEventListener("resize", handleResize);
handleResize();