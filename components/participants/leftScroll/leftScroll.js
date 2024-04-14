function leftScroll() {
  //защита от  многократного нажатия на кнопку
  if (!flag) return;
  flag = !flag;

  activeParticipants--;
  if (activeParticipants < 0) activeParticipants = data.length - 1;
  const addWidth = document.querySelector(".participants-item").clientWidth;
  const containerList = document.querySelector(".participants-list");
  const computedStyles = window.getComputedStyle(containerList);
  const gapValue = computedStyles.getPropertyValue("gap");

  leftImage();
  animate({
    duration: 1000,
    draw: function (progress) {
      const newPosition = (addWidth + parseFloat(gapValue)) * (1 - progress);
      containerList.style.transform = `translateX(-${newPosition}px)`;
    },
    removeElement: containerList.lastChild,
  });
}
let interval;
leftBtn.addEventListener("click", () => {
  clearInterval(interval);
  leftScroll();
  interval = setInterval(function () {
    rightScroll();
  }, 4000);
});
