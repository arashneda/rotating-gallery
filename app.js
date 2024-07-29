const imageContainerEl = document.querySelector(".image-container");
const prevBtnEl = document.getElementById("prev");
const nextBtnEl = document.getElementById("next");

console.log(imageContainerEl);
console.log(prevBtnEl);
console.log(nextBtnEl);

let deg = 0;
let timer;
prevBtnEl.addEventListener("click", () => {
  deg = deg + 45;
  clearTimeout(timer);
  changeProperty();
});
nextBtnEl.addEventListener("click", () => {
  deg = deg - 45;
  clearTimeout(timer);
  changeProperty();
});

function changeProperty() {
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${deg}deg)`;

  timer = setTimeout(() => {
    deg = deg - 45;
    changeProperty();
  }, 2000);
}
changeProperty();
