// the container that was made in the html file
const container = document.querySelector("#container");


//buildGrid function
function buildGrid(gridSize) {
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



