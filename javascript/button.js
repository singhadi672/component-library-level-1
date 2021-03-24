let button = document.querySelector(".slider-switch");
let slider = document.querySelector(".slider");

button.addEventListener("click", () => {
  button.classList.toggle("active");
  slider.classList.toggle("slider-inactive");
});
