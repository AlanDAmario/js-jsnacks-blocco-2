'use strict';
//CREAZIONE DI UN INPUT DI ARRAY 
const arrElements = ['ciao', 'addio', 'benvenuto', 'salve'];
//CONTROLLARE SE LA FUNZIONE è CORRETTA, ULTIMO STEP
console.log(contaElementi(arrElements));
// CREAAZIONE FUNZIONE
function contaElementi(arr) {
    //CREARE UN CONTATORE CON VALORE 0, PERCHè L ARRAY PARTE DA 0
    let count = 0;
    // CREAZIONE DEL LOOP WHILE (arr[count] STA A DEFINIRE CHE IL MIO PARAMETRO arr HA COME VALORE count)
    while (arr[count] !== undefined) {
        //INCREMNETATORE 
        count++
    }
    // COSA PORTARE A SCHERMO
    return count;
}
