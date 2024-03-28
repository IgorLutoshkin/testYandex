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
/*  */
/*  */
function rightImage() {
  let rightImg = activeParticipants + 1;
  if (rightImg >= data.length) rightImg = 0;
  listElement.append(render(rightImg));
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
  return leftImg;
}
leftImage();
/*  */
/*  */
/*  */
leftBtn.addEventListener("click", () => {
  activeParticipants--;
  if (activeParticipants < 0) activeParticipants = data.length - 1;
  const addWidth = document.querySelector(".participants-item").clientWidth;
  const containerList = document.querySelector(".participants-list");
  const itemElement = document.querySelector(".participants-item");
  leftImage();
  animate({
    duration: 1000,
    draw: function (progress) {
      const newPosition = widthOffset * (1 - progress);
      console.log(newPosition);
      containerList.style.transform = `translateX(-${newPosition}px)`;
      itemElement.style.width = addWidth * progress;
    },
    removeElement: containerList.lastChild,
  });
});

rightBtn.addEventListener("click", () => {
  activeParticipants++;
  if (activeParticipants >= data.length) activeParticipants = 0;

  const containerList = document.querySelector(".participants-list");
  rightImage();
  animate({
    duration: 1000,
    draw: function (progress) {
      const newPosition = -widthOffset * progress;
      containerList.style.transform = `translateX(${newPosition}px)`;
    },
    removeElement: containerList.firstChild,
  });
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
    }
  });
};
