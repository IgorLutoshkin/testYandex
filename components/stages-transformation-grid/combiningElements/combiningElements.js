const screenWidthThreshold = 767;
const list = document.querySelector(".grid-wrap");
const item1 = document.querySelector(".grid-item-1");
const item2 = document.querySelector(".grid-item-2");
let divElement = null;
let divElement2 = null;

export function moveItemsBasedOnScreenWidth() {
  if (window.innerWidth <= screenWidthThreshold) {
    if (!divElement) {
      divElement = document.createElement("div");
      divElement.className = "wrap-item-block-1";
    }

    if (!divElement.contains(item1)) {
      divElement.appendChild(item1);
    }

    if (!divElement.contains(item2)) {
      divElement.appendChild(item2);
    }

    if (!list.contains(divElement)) {
      list.insertBefore(divElement, list.firstChild);
    }
  } else {
    if (divElement && list.contains(divElement)) {
      list.insertBefore(item2, list.firstChild);
      list.insertBefore(item1, list.firstChild);
      divElement.remove();
      divElement = null;
    }
  }
}

moveItemsBasedOnScreenWidth();
window.addEventListener("resize", moveItemsBasedOnScreenWidth);


const item4 = document.querySelector(".grid-item-4");
const item5 = document.querySelector(".grid-item-5");

export function moveItemsBasedOnScreenWidth_2() {
  if (window.innerWidth <= screenWidthThreshold) {
    if (!divElement2) {
      divElement2 = document.createElement("div");
      divElement2.className = "wrap-item-block-2";
    }

    if (!divElement2.contains(item4)) {
      divElement2.appendChild(item4);
    }

    if (!divElement2.contains(item5)) {
      divElement2.appendChild(item5);
    }

    if (!list.contains(divElement2)) {
      list.insertBefore(divElement2, list.children[2]);
    }
  } else {
    if (divElement2 && list.contains(divElement2)) {
      list.insertBefore(item5, list.children[4]);
      list.insertBefore(item4, list.children[3]);
      divElement2.remove();
      divElement2 = null;
    }
  }
}

moveItemsBasedOnScreenWidth_2();
window.addEventListener("resize", moveItemsBasedOnScreenWidth_2);
