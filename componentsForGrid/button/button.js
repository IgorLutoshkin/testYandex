import { dataGrid } from "../dataGrid.js";

export function button(element, myFunction) {
	element.addEventListener('click',()=>{myFunction()} )
}
