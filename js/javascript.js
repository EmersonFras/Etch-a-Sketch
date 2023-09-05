let gridLengths = 16;
createGrid(gridLengths);

// define a constant for the change size button
const button = document.querySelector("#btn");

// add an event listener to button for when its clicked
button.addEventListener("click", sizeChange);


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

    // define a list of all the grid boxes
const boxes = document.querySelectorAll("#box");

    // add an event listener to each grid box for when the mouse is over it
    boxes.forEach(box => box.addEventListener("mouseover", gridDraw));
}
function gridDraw() {
    // set attribute of this to hover to give the hover styling
    this.setAttribute("class", "hover");
}

function sizeChange() {
    // prompt for the size user wants
    let size = prompt("Enter size of the drawing space (MAX 100): ");
    // check that input is between 0 and 100
    while (!(size < 100 && size > 0)) {
        size = prompt("Enter size of the drawing space (MAX 100): ");
    }
    // define a constant container
    const container = document.querySelector(".container");
    // replace children of container to remove all children
    container.replaceChildren();
    // call create grid with the input size
    createGrid(size);
}

