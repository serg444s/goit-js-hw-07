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
let width = 20;
let height = 20;

function createBoxes(amount) {
  for (let i = 1; i <= amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${(width += 10)}px`;
    box.style.height = `${(height += 10)}px`;
    box.style.backgroundColor = getRandomHexColor();
    divBoxes.append(box);
    inputNumber.value = "";
  }
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
  width = 20;
  height = 20;
}

btnCreate.addEventListener("click", () => {
  const amount = parseInt(inputNumber.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
});

btnDestroy.addEventListener("click", destroyBoxes);
