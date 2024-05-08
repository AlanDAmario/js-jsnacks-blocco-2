'use strict';
const arrElements = ['ciao', 'addio', 'benvenuto', 'salve'];
contaElementi(arrElements);

function contaElementi(arr) {
    let count = 0;
    while (arr[count] !== undefined) {
        count++
    }
    return count;
}
