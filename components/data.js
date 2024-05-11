export const data = {
  activeParticipant: 1,
  flag: true,
  colorYellow: "rgb(251, 206, 81)",
  colorBlack: "rgb(31, 31, 31)",
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




export const handleHoverEffect = (button, color) => {
  let innerWidth = window.innerWidth;
  const handleResize = () => {
    innerWidth = window.innerWidth;
    if (innerWidth >= 769) {
      attachDesktopHoverEvents(button, color);
    } else {
      attachMobileHoverEvents(button, color);
    }
  };
  handleResize(); // вызываем функцию при первоначальной загрузке страницы
  window.addEventListener('resize', handleResize);
}


const attachDesktopHoverEvents = (button, color) => {
  button.addEventListener('mouseover', function () {
    button.style.backgroundColor = color;
  });

  button.addEventListener('mouseout', function () {
    button.style.backgroundColor = '';
  });

  button.addEventListener('mousedown', function () {
    button.style.backgroundColor = '';
  });

  button.addEventListener('mouseup', function () {
    button.style.backgroundColor = color;
  });
}

const attachMobileHoverEvents = (button, color) => {
  button.addEventListener('mousedown', function () {
    button.style.backgroundColor = color;
  });

  button.addEventListener('mouseup', function () {
    button.style.backgroundColor = '';
  });
}

