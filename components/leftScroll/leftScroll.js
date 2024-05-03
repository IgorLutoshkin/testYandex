import { animate, data } from "../data.js";
import { leftImage } from "../leftImage/leftImage.js";
import { clearIntervalID, intervalFunc } from "../rightScroll/rightScroll.js";

export function leftScroll() {

	const addWidth = document.querySelector(".participants-item").clientWidth;
	const containerList = document.querySelector(".participants-list");
	const computedStyles = window.getComputedStyle(containerList);
	const gapValue = computedStyles.getPropertyValue("gap");


	//защита от  многократного нажатия на кнопку
	if (!data.flag) return;
	data.flag = !data.flag;

	data.activeParticipant--;

	if (data.activeParticipant < 0) data.activeParticipant = data.participants.length - 1;
	// console.log(data.activeParticipant);

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

/*  */

const leftBtn = document.querySelector(".left");
leftBtn.addEventListener("click", () => {
	leftScroll()
	clearIntervalID()
	intervalFunc()

});

