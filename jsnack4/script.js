//jsnack 4

/* Creare una squadra di basket e per ogni giocatore generare casualmente le statistiche di gioco, secondo queste regole:
il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
la media punti fatti per partita deve essere compresa tra 0 e 50
la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100 */

//Creo due array, uno della squadra e uno giocatore.

var arraySquadra = [];



var mediaPunti = rdmNumber(50, 0);
var trePunti = rdmNumber(100, 0);

 arraySquadra.push = {
     
     media : mediaPunti,
     percTiri : trePunti
 }



//funzione che genera il codice giocatore formato da 3 lettere maiuscole e 3 cifre casuali





//FUNZIONI

//funzione che calcola la media punti fatta per partita compresa tra 0 e 50
//funzione che calcola la % di successo per i tiri da 3 punti, da 0 a 100
function rdmNumber(max, min){
   return Math.floor(Math.random()*(max - min +1) + min);
}

//codice giocatore, devo creare una funzione che sceglie lettere a caso

function rdmletter()






