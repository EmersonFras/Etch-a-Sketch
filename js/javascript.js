let color = "rgb(160, 160, 223)";
let count = 0;

let gridLengths = 16;
createGrid(gridLengths);

// define a constant for the change size button
const buttons = document.querySelectorAll("#btn");

// add an event listener to button for when its clicked
buttons.forEach(button => button.addEventListener("click", function(e) {
    // switch depending on the class of the button to call the right function
    switch (this.getAttribute("class")) {
        case ("reset"):
            createGrid(gridLengths);
            break;
        case ("size"):
            sizeChange();
            break;
    }
}));

// define a constant for the color buttons
const colorPickers = document.querySelectorAll("#color");

colorPickers.forEach(color => color.addEventListener("click", setColor))


function createGrid(gridLengths) {
    // define the constant for the container
    const container = document.querySelector(".container");

    // replace children of container to remove all children
    container.replaceChildren();

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
    this.style.backgroundColor = color;
    if (color != "rgb(160, 160, 223)") {
        count++;
        if (count == 10) {
            randomRGB();
            count = 0;
        }
    }
    //this.setAttribute("class", "hover-blue");
}

function sizeChange() {
    // prompt for the size user wants
    let size = prompt("Enter size of the drawing space (MAX 100): ");
    // check that input is between 0 and 100
    while (!(size < 100 && size > 0)) {
        size = prompt("Enter size of the drawing space (MAX 100): ");
    }
    // call create grid with the input size
    createGrid(size);
}

function setColor() {
    // switches the color depending on this's attributes
    switch (this.getAttribute("class")) {
        case ("blue"):
            color = "rgb(160, 160, 223)";
            break;
        case ("rainbow"):
            randomRGB();
            break;
    }
}

function randomRGB() {
    // defines three variables for red green and blue with random values
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    // sets color equal to the random numbers
    color = "rgb(" + r + "," + g + "," + b + ")";  

}

