export function adaptiveGap() {
	window.addEventListener("resize", function () {
		let containerWidth = document.querySelector(".participants-list").offsetWidth;
	
		if (window.innerWidth >= 1242) {
			// Устанавливаем gap в 20px, если ширина экрана больше или равна 1242px
			document.querySelector(".participants-list").style.gap = 20 + "px";
		} else if (window.innerWidth <= 1242 && window.innerWidth > 1170) {
			// Устанавливаем gap  от ширины контейнера, если ширина экрана между 1107px и 1242px
			let newGap = containerWidth * 0.05;
			document.querySelector(".participants-list").style.gap = newGap + "px";
		} else if (window.innerWidth <= 1126) {
			// Устанавливаем gap от ширины контейнера, если ширина экрана меньше 1126
			let newGap = containerWidth * 0.06;
			document.querySelector(".participants-list").style.gap = newGap + "px";
		} else {
			// Устанавливаем gap  от ширины контейнера во всех остальных случаях
			let newGap = containerWidth * 0.03;
			document.querySelector(".participants-list").style.gap = newGap + "px";
		}
	});
}