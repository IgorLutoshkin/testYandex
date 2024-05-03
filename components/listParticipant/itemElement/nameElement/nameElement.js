
export function nameElement(name) {
	const nameElement = document.createElement("p");
	nameElement.className = "participant-name";
	nameElement.innerText = name;
	return nameElement
}