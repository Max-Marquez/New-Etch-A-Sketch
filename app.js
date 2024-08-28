// RUN setGrid() to make the initial size on page load
//document.onload = createGrid();

// create row
const container = document.querySelector(".container");

// SET initial layout with 16x16 grid

var canvas = document.getElementById('gridContainer');
var width = canvas.offsetWidth;
var height = canvas.offsetHeight;

console.log(width, height);


function createGrid(boxesPerRow) {
    // create row
     for (let i = 0; i < boxesPerRow; i++) {
        // CALL newDivRow and nest newDivCol in each newDivRow, nest gridBlock in col
        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < boxesPerRow; j++) {
            const box = document.createElement('div');
            box.classList.add('column');
            box.addEventListener("mouseover", (event) => {
                box.style.backgroundColor = '#0000FF';
            });
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

createGrid(16);