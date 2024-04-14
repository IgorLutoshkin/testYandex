const circleElement = document.querySelectorAll(
  ".block-pagination-circles span"
);

let currentIndex = 0;

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