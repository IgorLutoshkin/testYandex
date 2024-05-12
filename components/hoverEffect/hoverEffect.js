import { data, handleHoverEffect } from "../data.js"


export function hoverEffect() {

	let buttonLeft = document.querySelector('.button-left')
	let buttonRight = document.querySelector('.button-right')

	handleHoverEffect(buttonLeft, data.colorYellow, data.colorBlack)
	handleHoverEffect(buttonRight, data.colorBlack, data.colorGrey)
}
