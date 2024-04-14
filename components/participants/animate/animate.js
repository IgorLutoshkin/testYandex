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