import { data } from "../../data.js";

const counterElement = document.querySelector(".count-participants");
const container = document.querySelector(".participants");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
// let scrollPosition = 0;
// let activeParticipants = 1;
// const widthOffset = 414;
let flag = true;

const listElement = document.createElement("ul");
listElement.className = "participants-list";
container.append(listElement);
/*  */
export function render() {
  let indexArr = 1;

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
