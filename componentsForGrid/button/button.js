
export function button(element, myFunction) {
	let element = document.querySelector('button')
	element.addEventListener("click", () => myFunction())
}

// export function Button(title, func) {
// 	const btnElement = document.createElement("button");

// 	btnElement.append(title); // add title

// 	btnElement.addEventListener("click", () => func()); // add function callback
// 	return btnElement;
// }