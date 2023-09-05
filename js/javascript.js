// define the constant for the container
const container = document.querySelector(".container");

const gridLengths = 16;

// iterate through grid lengths to create rows and columns of divs
for (let j = 0; j < gridLengths; j++) {
    // define a constant for the row div
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    // iterate through grid lengths to create the column divs
    for (let i = 0; i < gridLengths; i++) {
        const box = document.createElement("div");
        box.setAttribute("class", "box");
        row.appendChild(box);
    }
    container.appendChild(row);
}

