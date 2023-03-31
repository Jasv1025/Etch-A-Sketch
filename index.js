let grid;
let button = document.createElement('button');
button.textContent = 'Change Grid';
button.setAttribute('onclick', "javascript: buttonClick();");
document.body.appendChild(button);

let createGrid = function(numRow, numColumn){
    if(!numRow){numRow = 10;}
    if(!numColumn){numColumn = 10;}
    grid = document.createElement('div');
    grid.className = 'grid';
    let size = determineSize(numRow, numColumn);
    for (let i = 0; i < numColumn; i++){
        let column = document.createElement('div');
        column.className = 'column' + ' ' + i;
        for (let j = 0; j <numRow; j++){
            let item = document.createElement('div');
            item.className = 'pixel' + ' ' + j;
            item.style.width = size+'px';
            item.style.height = size+'px';
            item.addEventListener('mouseover', (event) => {item.classList.add('drawn')});
            column.appendChild(item);
        }
        grid.appendChild(column);
    }
    document.body.appendChild(grid);
}

let determineSize = function(numRow, numColumn){
    let width = window.innerWidth/numColumn;
    let height = (window.innerHeight-25)/numRow;
    let size = width;
    if(width > height){size = height;}
    return size;
}

let buttonClick = function(){
    let row = Number(prompt('Enter the number of rows you would like.'));
    let column = Number(prompt('Enter the number of columns you would like'));
    if(grid){document.body.removeChild(grid);}
    createGrid(row, column);
}

window.onresize = function(){
    let children = grid.children;
    let size = determineSize(children[0].children.length, children.length);
    for(let i=0; i<children.length; i++){
        let items = children[i].children;
        for(let j=0; j<items.length; j++){
            items[j].style.width = size+'px';
            items[j].style.height = size+'px';
        }
    }
}