import { data } from "../data.js";
import { leftCount } from "../leftCount/leftCount.js";
import { itemElement } from "../listParticipant/itemElement/itemElement.js";

export function leftImage() {
	let list = document.querySelector('.participants-list')
	let leftImg = data.activeParticipant - 1;
	if (leftImg < 0) leftImg = data.participants.length - 1;
	list.prepend(itemElement(leftImg));
	leftCount(data.activeParticipant);
	// return leftImg;
}
