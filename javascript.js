let container = document.querySelector("#container");
let setGridSizeButton = document.querySelector("#setGridSizeButton");
function generatePanels(gridSize) {
  for (let i = 0; i < gridSize ** 2; i++) {
    let panel = document.createElement("div");
    panel.classList.add("panel");
    panel.style.height = `${510 / gridSize}px`;
    panel.style.width = `${510 / gridSize}px`;
    panel.addEventListener("mouseover", () => {
      panel.style.backgroundColor = "black";
    });

    container.appendChild(panel);
  }
}

setGridSizeButton.addEventListener("click", () => {
  let gridSize = prompt();
  if (gridSize > 100) {
    gridSize = 100;
  }
  container.innerHTML = "";
  generatePanels(gridSize);
});
generatePanels(16);
