function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divBoxes = document.querySelector("#boxes");
const inputNumber = document.querySelector('input[type="number"]');
inputNumber.name = "number";
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
let localSize = 30;

function createBoxes(amount) {
  destroyBoxes();
  let localSize = 30;
  for (let i = 1; i <= amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${localSize + i * 10}px`;
    box.style.height = `${localSize + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    divBoxes.append(box);
    inputNumber.value = "";
  }
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
}

btnCreate.addEventListener("click", () => {
  const amount = parseInt(inputNumber.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
});

btnDestroy.addEventListener("click", destroyBoxes);
