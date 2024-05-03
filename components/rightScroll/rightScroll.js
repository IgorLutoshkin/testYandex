import { animate, data } from "../data.js";
import { rightImage } from "../rightImage/rightImage.js";

export function rightScroll() {
  //защита от  многократного нажатия на кнопку
  if (!data.flag) return;
  data.flag = !data.flag;

  data.activeParticipant++;
  if (data.activeParticipant >= data.participants.length) data.activeParticipant = 0;

  const containerList = document.querySelector(".participants-list");
  const addWidth = document.querySelector(".participants-item").clientWidth;
  const computedStyles = window.getComputedStyle(containerList);
  const gapValue = computedStyles.getPropertyValue("gap");

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


/*  */


let interval; // пустышка
/* функция для запуска перелистывания участников */
export const intervalFunc = () => interval = setInterval(function () {
  rightScroll()
}, 4000);
/* нужно объвить функцию, чтобы заработало  */
intervalFunc()

/* функция очистки таймера */
export const clearIntervalID = () => clearInterval(interval);

function intervalScroll() {
  clearIntervalID();
  rightScroll();
  intervalFunc();
}

const rightBtn = document.querySelector(".right");
rightBtn.addEventListener("click", () => {
  intervalScroll()
});