const list = document.querySelector("#categories");
console.log(`Number of categories: ${list.children.length}`);

const item = document.querySelectorAll(".item");
for (const i of item) {
  const categorie = i.firstElementChild.textContent;
  const elements = i.lastElementChild;
  console.log(`Categorie: ${categorie}`);
  console.log(`Elements: ${elements.children.length}`);
}
