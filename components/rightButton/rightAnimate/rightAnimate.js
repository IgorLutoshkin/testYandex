import { animate, data } from "../../data.js";
import { rightImage } from "../rightImage/rightImage.js";

export function rightAnimate() {
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