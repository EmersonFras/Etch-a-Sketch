let gridLengths = prompt("How many squares do you want the sides to have?")
createGrid(gridLengths);

// define a list of all the grid boxes
const boxes = document.querySelectorAll("#box");

// add an event listener to each grid box for when the mouse is over it
boxes.forEach(box => box.addEventListener("mouseover", gridDraw));


function createGrid(gridLengths) {
    // define the constant for the container
    const container = document.querySelector(".container");

    // iterate through grid lengths to create rows and columns of divs
    for (let j = 0; j < gridLengths; j++) {
        // define a constant for the row div
        const row = document.createElement("div");
        row.setAttribute("id", "row");
        // iterate through grid lengths to create the column divs
        for (let i = 0; i < gridLengths; i++) {
            const box = document.createElement("div");
            box.setAttribute("id", "box");
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}
function gridDraw() {
    // set attribute of this to hover to give the hover styling
    this.setAttribute("class", "hover");
}

