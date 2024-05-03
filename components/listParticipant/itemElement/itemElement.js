import { data } from "../../data.js";
import { buttonElement } from "./buttonElement/buttonElement.js";
import { nameElement } from "./nameElement/nameElement.js";
import { pictureElement } from "./pictureElement/pictureElement.js";
import { statusElement } from "./statusElement/statusElement.js";

export function itemElement(element) {
	// element = data.activeParticipant
	const itemElement = document.createElement("li");
	itemElement.className = "participants-item";
	// ;
	itemElement.append(
		pictureElement(data.participants[element].avatar),
		nameElement(data.participants[element].name),
		statusElement(data.participants[element].status),
		buttonElement()
	);

	return itemElement
}

