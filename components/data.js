export const data = {
  activeParticipant: 1,
  flag: true,
  colorYellow: "rgb(251, 206, 81)",
  colorBlack: "rgb(31, 31, 31)",
  colorGrey: "rgb(255, 255, 255)",
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




export const handleHoverEffect = (button, backgroundColor, textColor) => {
  let innerWidth = window.innerWidth;


  const handleResize = () => {
    innerWidth = window.innerWidth;

    if (innerWidth >= 769) {
      attachDesktopHoverEvents(button, backgroundColor, textColor);
    } else {

      attachMobileHoverEvents(button, backgroundColor, textColor);
    }
  };

  handleResize(); // вызываем функцию при первоначальной загрузке страницы 

  window.addEventListener('resize', handleResize);
}

const attachDesktopHoverEvents = (button, backgroundColor, textColor) => {
  button.addEventListener('mouseover', function () {
    button.style.backgroundColor = backgroundColor;
    button.style.color = textColor;
  });

  button.addEventListener('mouseout', function () {
    button.style.backgroundColor = '';
    button.style.color = '';
  });

  button.addEventListener('mousedown', function () {
    button.style.backgroundColor = '';
    button.style.color = '';
  });

  button.addEventListener('mouseup', function () {
    button.style.backgroundColor = backgroundColor;
    button.style.color = textColor;
  });
}

const attachMobileHoverEvents = (button, backgroundColor, textColor) => {
  button.addEventListener('touchstart', function () {
    button.style.backgroundColor = backgroundColor;
    button.style.color = textColor;
  });

  button.addEventListener('touchend', function () {
    button.style.backgroundColor = '';
    button.style.color = '';
  });
}


