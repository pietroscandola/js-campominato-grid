/* 
L'utente indica TRAMITE DOM un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

//* FUNZIONI DA UTILIZZARE

function getUniqueRndNumber(min, max, list) {
    let rndNumber;
    do {
        rndNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (list.includes(rndNumber));
    return rndNumber;
}

function createCell(cellNumber) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.id = cellNumber;
    cell.innerText = cellNumber;
    return cell;
}

// RECUPERO LA GRIGLIA

const grid = document.getElementById('grid');


// SE SI SCEGLIE DIFFICOLTA 1

const cell = 10;
const column = 10;

const total = cell * column;
console.log(total);

const array1 = [];

for (let i = 0; i < total; i++) {
    const cellNumber = getUniqueRndNumber(1, 100, array1);

    array1.push(cellNumber);

    const cell = createCell(cellNumber);

    cell.addEventListener('click'), () => {
        cell.classList.toggle('clicked');
    }

    grid.appendChild(cell);
}