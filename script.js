let container = document.getElementById('container');
let r,g,b,rA,gA,bA;

function createGrid(size = 16) {
    r = Math.floor(Math.random() * 255) + 1;
    g = Math.floor(Math.random() * 255) + 1;
    b = Math.floor(Math.random() * 255) + 1;

    rA = r/10;
    gA = g/10;
    bA = b/10;

    container.style.gridTemplateColumns = "repeat("+size+", auto)";
    container.innerHTML = "";
    for (let i = 1; i <= size*size; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.setAttribute('id', 'square-'+i);
        square.setAttribute('onmouseover', 'mouseOver("square-'+i+'")');
        container.appendChild(square);
    }
}

createGrid();

function mouseOver(id) {
    let element = document.getElementById(id);
    element.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    if(r < 255)
        r -= rA;
    if(g < 255)
        g -= gA;
    if(b < 255)
        b -= bA;
}

function btnClicked() {
    let size = prompt("Enter size of the grid: ");
    if(size != null) {
        createGrid(size);
    }
}