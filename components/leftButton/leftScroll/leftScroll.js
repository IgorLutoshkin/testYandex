import { data, handleHoverEffect } from "../../data.js";
import { clearIntervalID, intervalFunc } from "../../rightButton/rightScroll/rightScroll.js";
import { leftAnimate } from "../leftAnimate/leftAnimate.js";

const leftBtn = document.querySelector(".left");

export function leftScroll() {
	leftBtn.addEventListener("click", () => {
		leftAnimate()
		clearIntervalID()
		intervalFunc()
	});
}
handleHoverEffect(leftBtn, data.colorYellow)




