const circleElement = document.querySelectorAll(
  ".block-pagination-circles span"
);

let currentIndex = 0;


function updatePagination(index) {
  circleElement.forEach((circle, i) => {
    if (i === index) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
}