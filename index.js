const screenWidthThreshold = 767;

const list = document.querySelector(".grid-wrap");
const item1 = document.querySelector(".grid-item-1");
const item2 = document.querySelector(".grid-item-2");
let divElement = null;
let divElement2 = null;

function moveItemsBasedOnScreenWidth() {
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

function moveItemsBasedOnScreenWidth_2() {
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

/*  */
const data = [
  {
    avatar: "./img/image-gamer.png",
    name: "Хозе-Рауль Капабланка",
    status: "Чемпион мира по шахматам",
  },
  {
    avatar: "./img/image-gamer.png",
    name: "Эммануил Ласкер",
    status: "Чемпион мира по шахматам",
  },
  {
    avatar: "./img/image-gamer.png",
    name: "Александр Алехин",
    status: "Чемпион мира по шахматам",
  },
  {
    avatar: "./img/image-gamer.png",
    name: "Арон Нимцович",
    status: "Чемпион мира по шахматам",
  },
  {
    avatar: "./img/image-gamer.png",
    name: "Рихард Рети",
    status: "Чемпион мира по шахматам",
  },
  {
    avatar: "./img/image-gamer.png",
    name: "Остап Бендер",
    status: "Чемпион мира по шахматам",
  },
];

/*  */
const counterElement = document.querySelector(".count-participants");
const container = document.querySelector(".participants");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
let scrollPosition = 0;
let activeParticipants = 1;
const widthOffset = 414;
let flag = true;
/*  */

/*  */

const listElement = document.createElement("ul");
listElement.className = "participants-list";
container.append(listElement);
/*  */
function render(indexArr) {
  const itemElement = document.createElement("li");
  itemElement.className = "participants-item";

  /*  */
  const pictureElement = document.createElement("picture");
  itemElement.append(pictureElement);

  /*  */
  const sourceElement = document.createElement("source");
  sourceElement.srcset = "./img/image-gamer-1180.png";
  sourceElement.media = "(max-width:1180px)";
  /*  */
  const imgElement = document.createElement("img");
  imgElement.className = "participants-avatar";
  imgElement.src = data[indexArr].avatar;

  /*  */
  const nameElement = document.createElement("p");
  nameElement.className = "participant-name";
  nameElement.innerText = data[indexArr].name;
  /*  */
  const statusElement = document.createElement("p");
  statusElement.className = "participant-status";
  statusElement.innerText = data[indexArr].status;
  /*  */
  const buttonElement = document.createElement("button");
  buttonElement.className = "participant-about-btn";
  buttonElement.innerText = "Подробнее";
  /*  */
  listElement.append(itemElement);

  pictureElement.append(sourceElement, imgElement);
  itemElement.append(pictureElement, nameElement, statusElement, buttonElement);

  return itemElement;
}
render(activeParticipants);

/* ***************************************************** */
function rightImage() {
  let rightImg = activeParticipants + 1;
  if (rightImg >= data.length) rightImg = 0;
  listElement.append(render(rightImg));

  rightCount(activeParticipants);
  return rightImg;
}
rightImage();
/*  */
/*  */
/*  */
function leftImage() {
  let leftImg = activeParticipants - 1;
  if (leftImg < 0) leftImg = data.length - 1;
  listElement.prepend(render(leftImg));
  leftCount(activeParticipants);
  return leftImg;
}
leftImage();
/*  */
/*  */
/* ********************************************** */

function leftScroll() {
  //защита от  многократного нажатия на кнопку
  if (!flag) return;
  flag = !flag;

  activeParticipants--;
  if (activeParticipants < 0) activeParticipants = data.length - 1;
  const addWidth = document.querySelector(".participants-item").clientWidth;
  const containerList = document.querySelector(".participants-list");
  const computedStyles = window.getComputedStyle(containerList);
  const gapValue = computedStyles.getPropertyValue("gap");

  leftImage();
  animate({
    duration: 1000,
    draw: function (progress) {
      const newPosition = (addWidth + parseFloat(gapValue)) * (1 - progress);
      containerList.style.transform = `translateX(-${newPosition}px)`;
    },
    removeElement: containerList.lastChild,
  });
}

leftBtn.addEventListener("click", () => {
  clearInterval(interval);
  leftScroll();
  interval = setInterval(function () {
    scrollRight();
  }, 4000);
});
/*  */
/*  */
/*  */

function rightScroll() {
  //защита от  многократного нажатия на кнопку
  if (!flag) return;
  flag = !flag;

  activeParticipants++;
  if (activeParticipants >= data.length) activeParticipants = 0;

  const containerList = document.querySelector(".participants-list");
  const addWidth = document.querySelector(".participants-item").clientWidth;

  const computedStyles = window.getComputedStyle(containerList);
  const gapValue = computedStyles.getPropertyValue("gap");
  counterElement.innerText = "";

  rightImage();
  animate({
    duration: 1000,
    draw: function (progress) {
      const newPosition = -(addWidth + parseFloat(gapValue)) * progress;
      containerList.style.transform = `translateX(${newPosition}px)`;
    },
    removeElement: containerList.firstChild,
  });
}

let interval;

interval = setInterval(function () {
  rightScroll();
}, 4000);

rightBtn.addEventListener("click", () => {
  clearInterval(interval);
  rightScroll();
  interval = setInterval(function () {
    scrollRight();
  }, 4000);
});
/*  */
/*  */
/*  */
const animate = ({ duration, draw, removeElement }) => {
  const start = performance.now();
  requestAnimationFrame(function animate(time) {
    let step = (time - start) / duration;
    if (step > 1) step = 1;
    draw(step);
    if (step < 1) {
      requestAnimationFrame(animate);
    } else {
      removeElement.remove();
      document.querySelector(".participants-list").style.transform = "";
      //защита от  многократного нажатия на кнопку
      flag = true;
    }
  });
};
/* ****************************************************************************** */
/*  */
/*  */
/*  */
window.addEventListener("resize", function () {
  var containerWidth = document.querySelector(".participants-list").offsetWidth;

  if (window.innerWidth >= 1242) {
    // Устанавливаем gap в 20px, если ширина экрана больше или равна 1242px
    document.querySelector(".participants-list").style.gap = 20 + "px";
  } else if (window.innerWidth <= 1242 && window.innerWidth > 1170) {
    // Устанавливаем gap  от ширины контейнера, если ширина экрана между 1107px и 1242px
    var newGap = containerWidth * 0.05;
    document.querySelector(".participants-list").style.gap = newGap + "px";
  } else if (window.innerWidth <= 1126) {
    // Устанавливаем gap от ширины контейнера, если ширина экрана меньше 1126
    var newGap = containerWidth * 0.06;
    document.querySelector(".participants-list").style.gap = newGap + "px";
  } else {
    // Устанавливаем gap  от ширины контейнера во всех остальных случаях
    var newGap = containerWidth * 0.03;
    document.querySelector(".participants-list").style.gap = newGap + "px";
  }
});
/* ******************************************************** */

/*  */
function leftCount(activeParticipants) {
  let countElementPage = listElement.childElementCount;
  let screenWidth_1 = 1126;
  let screenWidth_2 = 729;

  /* экраны до 1126, когда отображается 3 участника */

  if (window.innerWidth > screenWidth_1) {
    let rangeStart = activeParticipants + 2;
    let countElementPage = listElement.childElementCount;

    if (rangeStart <= countElementPage) {
      counterElement.innerText = rangeStart + " / " + data.length;
    }

    if (rangeStart > data.length) {
      counterElement.innerText = rangeStart - data.length + " / " + data.length;
    }
    if (rangeStart <= data.length) {
      counterElement.innerText = rangeStart + " / " + data.length;
    }
  }
  /* экраны от 1126, когда отображается 2 участника */
  if (window.innerWidth <= screenWidth_1) {
    let rangeStart = activeParticipants + 1;

    if (rangeStart <= countElementPage) {
      counterElement.innerText = rangeStart + " / " + data.length;
    }

    if (rangeStart > data.length) {
      counterElement.innerText = rangeStart - data.length + " / " + data.length;
    }
    if (rangeStart <= data.length) {
      counterElement.innerText = rangeStart + " / " + data.length;
    }
  }

  /* экраны от 729, когда отображается 1 участни */

  if (window.innerWidth <= screenWidth_2) {
    let rangeStart = activeParticipants;

    if (rangeStart <= countElementPage) {
      counterElement.innerText = rangeStart + " / " + data.length;
    }

    if (rangeStart < data.length) {
      counterElement.innerText = rangeStart + " / " + data.length;
    }
    if (rangeStart === 0) {
      rangeStart = data.length;
      counterElement.innerText = rangeStart + " / " + data.length;
    }
  }
}
function rightCount(activeParticipants) {
  let countElementPage = listElement.childElementCount;
  let screenWidth_1 = 1126;
  let screenWidth_2 = 729;

  /* экраны до 1126, когда отображается 3 участника */

  let rangeEnd = activeParticipants + 2;

  if (rangeEnd > data.length) {
    rangeEnd -= data.length;
  }

  if (rangeEnd === 0) {
    rangeEnd = data.length;
  }

  counterElement.innerText = rangeEnd + " / " + data.length;

  /* экраны от 1126, когда отображается 2 участника */
  if (window.innerWidth <= screenWidth_1) {
    let rangeStart = activeParticipants + 1;

    if (rangeStart <= countElementPage) {
      counterElement.innerText = rangeStart + " / " + data.length;
    }

    if (rangeStart > data.length) {
      counterElement.innerText = rangeStart - data.length + " / " + data.length;
    }
    if (rangeStart <= data.length) {
      counterElement.innerText = rangeStart + " / " + data.length;
    }
  }

  /* экраны от 729, когда отображается 1 участни */

  if (window.innerWidth <= screenWidth_2) {
    let rangeStart = activeParticipants;

    if (rangeStart <= countElementPage) {
      counterElement.innerText = rangeStart + " / " + data.length;
    }

    if (rangeStart < data.length) {
      counterElement.innerText = rangeStart + " / " + data.length;
    }
    if (rangeStart === 0) {
      rangeStart = data.length;
      counterElement.innerText = rangeStart + " / " + data.length;
    }
  }
}
