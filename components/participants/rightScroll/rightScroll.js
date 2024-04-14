function rightScroll() {
  //защита от  многократного нажатия на кнопку
  if (!flag) return;
  flag = !flag;

  activeParticipants++;
  if (activeParticipants >= data.length) activeParticipants = 0;

  const containerList = document.querySelector(".participants-list");
  const addWidth = document.querySelector(".participants-item").clientWidth;

  const computedStyles = window.getComputedStyle(containerList);
  const gapValue = computedStyles.getPropertyValue("gap");
  counterElement.innerText = "";

  rightImage();
  animate({
    duration: 1000,
    draw: function (progress) {
      const newPosition = -(addWidth + parseFloat(gapValue)) * progress;
      containerList.style.transform = `translateX(${newPosition}px)`;
    },
    removeElement: containerList.firstChild,
  });
}

let interval;

interval = setInterval(function () {
  rightScroll();
}, 4000);

rightBtn.addEventListener("click", () => {
  clearInterval(interval);
  rightScroll();
  interval = setInterval(function () {
    rightScroll();
  }, 4000);
});