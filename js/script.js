/* 
L'utente indica TRAMITE DOM un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

//* FUNZIONI DA UTILIZZARE


function createCell(cellNumber, cellsPerRow) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.id = cellNumber;
    cell.innerText = cellNumber;
    const wh = `calc(100% / ${cellsPerRow})`;
    cell.style.height = wh;
    cell.style.width = wh;
    return cell;
}

// RECUPERO LA GRIGLIA
const grid = document.getElementById('grid');


// SE SI SCEGLIE DIFFICOLTA 1

const columns = 7;

const total = columns * columns;
console.log(total);

const array1 = [];
let sum = 0;
for (let i = 0; i < total; i++) {
    const number = sum + (i + 1);
    const cell = createCell(number, columns);
    cell.id = i + 1;


    array1.push(cell);


    cell.addEventListener('click', () => {
        cell.classList.toggle('clicked');
    });
    grid.appendChild(cell);
}