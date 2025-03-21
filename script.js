// the container that was made in the html file
const container = document.querySelector("#container");

// Loop to create a 16x16 div squares
for (let i = 1; i <= 256; i++) {
    // Create a new div
    const gridDiv = document.createElement("div");
    //append new div to parent container div
    container.appendChild(gridDiv); // Append the div to the container
}