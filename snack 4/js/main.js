'use strict';
const column1 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(column1, 'colonna 1');
const column2 = [];
let randomNumber = 0;
while (column2.length < column1.length) {
    column2.push(randomNumber);
    randomNumber = Math.floor(Math.random() * column1.length) + 1;
}
console.log(column2, 'colonna 2');
