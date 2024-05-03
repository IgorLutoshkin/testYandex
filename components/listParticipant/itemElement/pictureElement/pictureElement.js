import { imgElement } from "./imgElement/imgElement.js";
import { sourceElement } from "./sourceElement/sourceElement.js";

export function pictureElement(picture) {
	const pictureElement = document.createElement("picture");
	pictureElement.append(sourceElement(), imgElement(picture))
	return pictureElement
}