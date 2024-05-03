
export function statusElement(status) {
	const statusElement = document.createElement("p");
	statusElement.className = "participant-status";
	statusElement.innerText = status;
	return statusElement
}