buttonElementLeft.addEventListener("click", () => {
  if (offset <= 0) {
    offset = widthItem + 20;
  }
  offset = offset - widthItem - 20;
  gridWrap.style.left = -offset + "px";
});




// Обработчик события для кнопки влево
buttonElementLeft.addEventListener("click", () => {
  currentIndex = Math.max(currentIndex - 1, 0);
  updatePagination(currentIndex);
  conditionButtonGrid(currentIndex);
});




buttonElementLeft.addEventListener("mousedown", function () {
  buttonElementLeft.style.backgroundColor = "rgb(251, 206, 81)";
});