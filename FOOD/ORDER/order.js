const cartAdd = document.querySelector(".bi-cart");
const numberAdd = document.querySelectorAll(".btn");

let countNumbers = 0;
numberAdd.forEach((num) => {
  num.addEventListener("click", () => {
    cartAdd.innerHTML = countNumbers++;
  });
});
