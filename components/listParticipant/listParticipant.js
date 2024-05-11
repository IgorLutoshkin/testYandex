import { data } from "../data.js";
import { leftButton } from "../leftButton/leftButton.js";
import { leftImage } from "../leftButton/leftImage/leftImage.js";
import { rightButton } from "../rightButton/rightButton.js";
import { rightImage } from "../rightButton/rightImage/rightImage.js";
import { itemElement } from "./itemElement/itemElement.js";

export function listParticipant() {
	const container = document.querySelector(".participants");
	const listElement = document.createElement("ul");
	listElement.className = "participants-list";
	container.append(listElement);

	leftButton()
	leftImage();
	listElement.append(itemElement(data.activeParticipant));
	rightImage();
	rightButton()

}




