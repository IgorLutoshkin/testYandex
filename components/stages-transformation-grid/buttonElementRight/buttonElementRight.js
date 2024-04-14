buttonElementRight.addEventListener("click", () => {
  buttonElementRight.style.backgroundColor = "#313131";
  if (offset >= (numberItem - 2) * (widthItem + 20)) {
    offset = (numberItem - 2) * (widthItem + 20);
  }
  offset = offset + widthItem + 20;
  gridWrap.style.left = -offset + "px";
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