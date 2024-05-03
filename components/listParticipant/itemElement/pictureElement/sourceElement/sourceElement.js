export function sourceElement() {
	const sourceElement = document.createElement("source");
	sourceElement.srcset = "./img/image-gamer-1180.png";
	sourceElement.media = "(max-width:1180px)";
	return sourceElement
}