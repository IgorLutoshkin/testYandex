import { data } from "../../data.js";

export function leftCount(activeParticipant) {
	let listElement = document.querySelector(".participants-list")
	const counterElement = document.querySelector(".count-participants");
	let countElementPage = listElement.childElementCount;
	let screenWidth_1 = 1126;
	let screenWidth_2 = 729;

	/* экраны до 1126, когда отображается 3 участника */

	if (window.innerWidth > screenWidth_1) {
		let rangeStart = activeParticipant + 2;
		// let countElementPage = listElement.childElementCount;

		if (rangeStart <= countElementPage) {
			counterElement.innerText = rangeStart + " / " + data.participants.length;
		}

		if (rangeStart > data.participants.length) {
			counterElement.innerText = rangeStart - data.participants.length + " / " + data.participants.length;
		}
		if (rangeStart <= data.participants.length) {
			counterElement.innerText = rangeStart + " / " + data.participants.length;
		}
	}
	/* экраны от 1126, когда отображается 2 участника */
	if (window.innerWidth <= screenWidth_1) {
		let rangeStart = activeParticipant + 1;

		if (rangeStart <= countElementPage) {
			counterElement.innerText = rangeStart + " / " + data.participants.length;
		}

		if (rangeStart > data.participants.length) {
			counterElement.innerText = rangeStart - data.participants.length + " / " + data.participants.length;
		}
		if (rangeStart <= data.participants.length) {
			counterElement.innerText = rangeStart + " / " + data.participants.length;
		}
	}

	/* экраны от 729, когда отображается 1 участни */

	if (window.innerWidth <= screenWidth_2) {
		let rangeStart = activeParticipant;

		if (rangeStart <= countElementPage) {
			counterElement.innerText = rangeStart + " / " + data.participants.length;
		}

		if (rangeStart < data.participants.length) {
			counterElement.innerText = rangeStart + " / " + data.participants.length;
		}
		if (rangeStart === 0) {
			rangeStart = data.participants.length;
			counterElement.innerText = rangeStart + " / " + data.participants.length;
		}
	}
}