// the container that was made in the html file
const container = document.querySelector("#container");


//buildGrid function
function buildGrid(gridSize) {
    //clear the inside everytime
    container.innerHTML = "";
    //each square will be the max height and width divided the users choice
    const squares = 960 / gridSize;

    //using a nested loop to create rows and columns
    for (row = 0; row < gridSize; row++) {
        for(column = 0; column < gridSize; column++) {
            //create a new div
            const gridDiv = document.createElement("div");
            gridDiv.style.width = `${squares}px`;
            gridDiv.style.height = `${squares}px`;
            gridDiv.style.position = "absolute"
            gridDiv.style.top = `${row * squares}px`;
            gridDiv.style.left = `${column * squares}px`;
            //append new div to parent
            container.appendChild(gridDiv); 
            // hover effect using mouseenter
            gridDiv.addEventListener("mouseenter", () => {
            //background color for hover effect (has to be in eventListener)
            gridDiv.style.backgroundColor = "aqua";
            });
        }
    }
}


// creating a button
const button = document.createElement("button");
button.textContent = "Grid Size";
document.body.insertBefore(button, container);

// adding a click effect to that button
button.addEventListener("click", () => {
    const gridSize = parseInt(prompt("Enter the number of squares per side"));
    if (gridSize > 0 && gridSize <= 100) {
        buildGrid(gridSize);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
});



