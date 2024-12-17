let sqn = 16;

function createGrid(size) {
  const gridContainer = document.querySelector(".top");
  gridContainer.innerHTML = "";

  let i = 1;
  while (i <= size) {
    for (let j = 1; j <= size; j++) {
      const div = document.createElement("div");
      div.classList.add("grid");
      let temp = `${i}${j}`;
      div.classList.add(temp);
      div.addEventListener("mouseover", () => {
        div.style.cssText = "background-color: black;";
      });
      gridContainer.appendChild(div);
    }
    i++;
  }
}

createGrid(sqn);

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  while (true) {
    sqn = parseInt(prompt("Enter no. of squares on each side: "));
    if (sqn <= 100) break;
  }
  createGrid(sqn);
});
