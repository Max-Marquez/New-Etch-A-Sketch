// RUN setGrid() to make the initial size on page load
//document.onload = createGrid();

// create row
const container = document.querySelector(".container");

// SET initial layout with 16x16 grid

const canvas = document.getElementById('gridContainer');
const width = canvas.offsetWidth;
const height = canvas.offsetHeight;

console.log(width, height);

// create function to randomize grid box background color on hover

function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return 'rgb(' + color.join(', ') + ')';
}

function increaseOpacity(box) {
    console.log('starting opacity: ' + box.style.opacity);
    let opacity = parseFloat(box.style.opacity) || 0;
    opacity = Math.min(opacity + 0.1, 1);
    box.style.opacity = opacity;
    console.log(box.style.opacity);
    console.log(opacity);
    
};


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
                box.style.backgroundColor = randomColor();
                increaseOpacity(box);
            });
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

// create function to incrementOpacity on mouseover event


createGrid(16);


// Add eventListener to the button
// Store prompt value as a number using parseInt() (prompt stores as string)
// Function should call createGrid(boxesPerRow) to create new grid

// REMOVE previous grid so that the grid can be set
function resetGrid(){
  // Target the div boxes
  //e.firstElementChild can be used. 
        let child = canvas.lastElementChild;
        while (child) {
            canvas.removeChild(child);
            child = canvas.lastElementChild;
        }
};

// GET userBoxesPerRow using prompt method and store that value as an integer
  const button = document.getElementById("resetButton");
  button.addEventListener("click", function() {
  let userInput = parseInt(prompt("Enter a number for the grid size. For Example: 64 will produce a 64x64 grid"));
    console.log(userInput);
    // create another function to remove the current grid children and then reset the grid size
    resetGrid();
    createGrid(userInput);
  });