const myBtn = document.querySelector(".button-left");
function handleResize() {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 768) {
    myBtn.addEventListener("mouseover", () => {
      myBtn.style.background = "rgb(251, 206, 81)";
    });
    myBtn.addEventListener("mouseout", () => {
      myBtn.style.background = "rgb(31, 31, 31)";
    });
  }
}

window.addEventListener("resize", handleResize);
handleResize();