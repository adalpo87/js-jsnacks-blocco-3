/* Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro. */


var arrayUno= ['A','B','C','D','E'];

var arrayDue= [1,2,3,4,5,6,7,8,9,1];

while(arrayUno.length != arrayDue.length){
    if(arrayUno.length < arrayDue.length){
        arrayUno.push(letterGen());
    }else{
        arrayDue.push(rdmNumber(9, 0));
    }
}
console.log(arrayUno);
console.log(arrayDue);

//funzione che mi genera lettere random



function letterGen (){
    var alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];
    var letter = "";
    letter += alfabeto[rdmNumber(alfabeto.length -1, 0)];
    return letter;
}



function rdmNumber(max, min){
    return Math.floor(Math.random()*(max - min + 1)+min);
}
