'use strict';
//DICHIARARE UN ARRAY CON TOT ELEMENTI
const array = [1, 2, 3, 4, 5, 6, 7];
//CREIAMO UN PROMPT PER L UTENTE
const arrUser = Number(prompt('trova elemento da 1 a 7'));
//DEFINIAMO UNA FUNZIONE
function trovaIndice(arrStandard, arrUser) {
    //COUNT DICHIARATO PRIMA PERCHè ABBIAMO SCELTO IL CICLO WHILE, IN CASO DIVERSO FOR(LET COUNT = 0; ARR[COUNT]!== UNDEFINIED; COUNT ++)
    let count = 0;
    //DEFINIAMO IL CICLO
    while (arrStandard[count] !== undefined) {
        //CONDIZIONI DA VERIFICARE
        if (arrUser == arrStandard[count]) {
            return count;
        } else {
            count++;
        }
    }
    return -1;
}
//RICHIAMO E ASSEGNAZIONE DEI PARAMENTRI DELLA FUNZIONE
trovaIndice(array, arrUser)