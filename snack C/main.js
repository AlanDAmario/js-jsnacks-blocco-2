'use strict';
const array = ['pippo', 'ciccio', 'topolino', 'ciao'];

function stampa(countArr) {
    let string = '';
    for (let i = 0; i < countArr.length; i++) {
        if (i === 0) {
            string += countArr[i];
        } else {
            string += ',' + countArr[i];
        }
    }
    return string;
}
console.log(stampa(array));
