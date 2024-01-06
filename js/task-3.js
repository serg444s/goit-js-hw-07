const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

nameInputEl.addEventListener("input", (event) => {
  if (event.currentTarget.value.trim()) {
    nameOutputEl.textContent = event.currentTarget.value.trim();
  } else {
    nameOutputEl.textContent = "Anonymous";
  }
});
