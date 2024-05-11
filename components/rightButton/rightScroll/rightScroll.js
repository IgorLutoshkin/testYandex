import { data, handleHoverEffect } from "../../data.js";
import { rightAnimate } from "../rightAnimate/rightAnimate.js";

let interval; // пустышка
/* функция для запуска перелистывания участников */
export const intervalFunc = () => interval = setInterval(function () {
  intervalScroll()
}, 4000);
/* нужно объвить функцию, чтобы заработало  */
intervalFunc()

/* функция очистки таймера */
export const clearIntervalID = () => clearInterval(interval);

export function intervalScroll() {
  clearIntervalID();
  rightAnimate();
  intervalFunc();
}

const rightBtn = document.querySelector(".right");
export function rightScroll() {
  rightBtn.addEventListener("click", () => {
    intervalScroll()
  });
}

handleHoverEffect(rightBtn, data.colorYellow)

