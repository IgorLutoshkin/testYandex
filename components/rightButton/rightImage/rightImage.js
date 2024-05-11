import { data } from "../../data.js";
import { itemElement } from "../../listParticipant/itemElement/itemElement.js";
import { rightCount } from "../rightCount/rightCount.js";

export function rightImage() {
	let list = document.querySelector('.participants-list')
	let rightImg = data.activeParticipant + 1;
	if (rightImg >= data.participants.length) rightImg = 0;
	list.append(itemElement(rightImg));

	rightCount(data.activeParticipant);
}