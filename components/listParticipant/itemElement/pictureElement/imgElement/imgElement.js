import { data } from "../../../../data.js";

export function imgElement(picture) {
	const imgElement = document.createElement("img");
	imgElement.className = "participants-avatar";
	imgElement.src = picture
	return imgElement
}
// data.participants[data.activeParticipant].avatar;