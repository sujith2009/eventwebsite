const stars = document.querySelectorAll(".btn");
const currentRatings = document.querySelector(".rating");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    let current_add = index + 1;
    currentRatings.innerHTML = `${current_add} out of 5`;
  });
});
