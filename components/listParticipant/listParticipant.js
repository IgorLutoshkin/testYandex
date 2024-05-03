import { data } from "../data.js";
import { leftImage } from "../leftImage/leftImage.js";
import { leftScroll } from "../leftScroll/leftScroll.js";
import { rightImage } from "../rightImage/rightImage.js";
import { rightScroll } from "../rightScroll/rightScroll.js";
import { itemElement } from "./itemElement/itemElement.js";

export function listParticipant() {
	const container = document.querySelector(".participants");
	const listElement = document.createElement("ul");
	listElement.className = "participants-list";
	container.append(listElement);

	leftImage();
	listElement.append(itemElement(data.activeParticipant));
	rightImage();

}




