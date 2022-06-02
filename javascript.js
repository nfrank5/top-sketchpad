let numberOfSquaresPerSide = 32;

const container = document.querySelector(".container");
const numberOfSquares = document.querySelector(".number-of-squares");
const colorCombo =  document.querySelector(".color");
numberOfSquares.addEventListener("click", defineNumberOfSquares);


createGrid(numberOfSquaresPerSide);
let squares = document.querySelectorAll(".square")
squares.forEach(s=> s.addEventListener("mouseout", changeColor ));


function changeColor(e){
    let color = colorCombo.value;
    if(color==="multicolor"){
        e.target.style.backgroundColor = `${randomColor()}`;
    } else if(color==="delete"){
        e.target.style.backgroundColor = "whitesmoke";
    } else{    
       e.target.classList.add("square-hover");
    }
    
}

function defineNumberOfSquares(e){
    let number = numberOfSquares.value;
    console.log(number)
    squares.forEach(s=>s.remove())
    createGrid(number)
    squares = document.querySelectorAll(".square")
    squares.forEach(s=> s.addEventListener("mouseout", changeColor ));

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

function randomColor(){
    return "#"+((1<<24)*Math.random()|0).toString(16); 
}