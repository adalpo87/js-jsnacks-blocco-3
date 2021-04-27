
//Jsnack 1
var zucchine = [
    {
        nome : 'zucchina_1',
        peso : 3,
        lunghezza : 19
    },
    {
        nome : 'zucchina_2',
        peso : 7,
        lunghezza : 7
    },
    {
        nome : 'zucchina_3',
        peso : 1,
        lunghezza : 16
    },
    {
        nome : 'zucchina_4',
        peso : 4,
        lunghezza : 9
    },
    {
        nome : 'zucchina_5',
        peso : 2,
        lunghezza : 20
    },
    {
        nome : 'zucchina_6',
        peso : 6,
        lunghezza : 16
    },
    {
        nome : 'zucchina_7',
        peso : 2,
        lunghezza : 11
    },
    {
        nome : 'zucchina_8',
        peso : 5,
        lunghezza : 17
    },
    {
        nome : 'zucchina_9',
        peso : 2,
        lunghezza : 12
    },
    {
        nome : 'zucchina_10',
        peso : 4,
        lunghezza : 18
    }
    
    ]

var peso = 0;

for(var i in zucchine){
    var zuc = zucchine[i];
    
    peso += parseInt(zuc.peso);
    
}
console.log('Peso totale delle zucchine:')
console.log(peso);

//Jsnack 2
var zuc_corte = [];
var zuc_lunghe = [];
var lunghezza_media = 15;

for (j in zucchine){
    var lg = zucchine[j];
    if(lg.lunghezza <= lunghezza_media){
        zuc_corte.push(lg);
    }else{
        zuc_lunghe.push(lg);
    }
}
console.log('Zucchine Corte:');
console.log(zuc_corte);
console.log('Zucchine Lunghe:');
console.log(zuc_lunghe);

var pesoZucchineCorte = 0;
for(c in zuc_corte){
    var zucPesoCorte = zuc_corte[c];
    pesoZucchineCorte += parseInt(zucPesoCorte.peso);
} 

console.log("Peso zucchine corte:");
console.log(pesoZucchineCorte)

var pesoZucchineLunghe = 0;
for(l in zuc_lunghe){
    var zucPesoLunghe = zuc_lunghe[l];
    pesoZucchineLunghe += parseInt(zucPesoLunghe.peso);
} 

console.log("Peso zucchine lunghe:");
console.log(pesoZucchineLunghe);

//jsnack 3

var arrayUno = [ 1, 2, 3, 3, 4, 5];
var arrayDue = ['A', 'B', 'C', 'D', 'E'];
var dueArray =[];

unicoArray(arrayUno, arrayDue, dueArray);



function unicoArray(primoArray, secondoArray, unioneArray){
   
    for(i in primoArray){
        
        if(primoArray !== undefined && secondoArray !== undefined){
        unioneArray.push(primoArray[i]);
        unioneArray.push(secondoArray[i]);
    }
    }
    
    return unioneArray;
}
console.log('Unione di due array');
console.log(dueArray);

//jsnack 4

/* Creare una squadra di basket e per ogni giocatore generare casualmente le statistiche di gioco, secondo queste regole:
il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
la media punti fatti per partita deve essere compresa tra 0 e 50
la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100 */

//Creo due array, uno della squadra e uno giocatore.

var arraySquadra = [];

var arrayGiocatore = [];


//devo creare 3 funzioni

//funzione che genera il codice giocatore formato da 3 lettere maiuscole e 3 cifre casuali

//funzione che calcola la media punti fatta per partita compresa tra 0 e 50

//funzione che calcola la % di successo per i tiri da 3 punti, da 0 a 100

