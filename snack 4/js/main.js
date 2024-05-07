'use strict';
const column1 = [1, 2, 3, 4, 5];
console.log(column1, 'colonna 1');
const column2 = [];
let randomNumber = 0;
while (column2.length < 5) {
    column2.push(randomNumber);
    randomNumber = Math.floor(Math.random() * 5) + 1;
}
console.log(column2, ' colonna 2');
