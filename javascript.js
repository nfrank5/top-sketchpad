let number = 16;

const container = document.querySelector(".container");
const numberOfSquares = document.querySelector(".number-of-squares");
numberOfSquares.addEventListener("click", defineNumberOfSquares);


createGrid(number);
let squares = document.querySelectorAll(".square")
squares.forEach(s=> s.addEventListener("mouseout", turnBlack ));

function turnBlack(e){
    e.target.classList.add("square-hover")
}


function defineNumberOfSquares(e){
    let number = numberOfSquares.value;
    console.log(number)
    squares.forEach(s=>s.remove())
    createGrid(number)
    squares = document.querySelectorAll(".square")
    squares.forEach(s=> s.addEventListener("mouseout", turnBlack ));

}


function createGrid(n){
    for(let i=0;i<n;i++){
        const line = document.createElement("div");
        line.classList.add("line")
        container.appendChild(line);
        for(let j=0;j<n;j++){
            const square = document.createElement("div");
            square.classList.add("square");
            line.appendChild(square);
        }
    }
}

