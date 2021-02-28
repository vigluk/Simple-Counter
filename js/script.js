document.querySelector(".counter-display").textContent = 0;

document.querySelector(".button-minus").addEventListener("click", function () {
  document.querySelector(".counter-display").textContent--;
});

document.querySelector(".button-plus").addEventListener("click", function () {
  document.querySelector(".counter-display").textContent++;
});
