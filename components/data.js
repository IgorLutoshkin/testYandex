export const data = {
  activeParticipant: 1,
  flag: true,
  participants: [
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
  ]
}

export const animate = ({ duration, draw, removeElement }) => {

  let list = document.querySelector(".participants-list");
  const start = performance.now();
  requestAnimationFrame(function animate(time) {
    let step = (time - start) / duration;
    if (step > 1) step = 1;
    draw(step);
    if (step < 1) {
      requestAnimationFrame(animate);
    } else {
      removeElement.remove();
      list.style.transform = "";
      //защита от  многократного нажатия на кнопку
      data.flag = true;
    }
  });
};


