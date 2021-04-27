//jsnack4
var arraySquadra = [];
var numeroGiocatori = 5;
var maxNum = 3;
var maxLet = 3;


//funzione che genera il codice giocatore formato da 3 lettere maiuscole e 3 cifre casuali
$(function(){
while(numeroGiocatori > 0){
    
    var newCode = codeName(maxNum, maxLet);
    var newMedia = rdmNumber (50, 0);
    var newSucc = rdmNumber (100, 0);
    
    arraySquadra.push({
      codice: newCode,
      media: newMedia,
      Tiri3punti: newSucc
    });
    numeroGiocatori--;
  }

  console.log(arraySquadra);

})


//FUNZIONI

//funzione che calcola la media punti fatta per partita compresa tra 0 e 50
//funzione che calcola la % di successo per i tiri da 3 punti, da 0 a 100
function rdmNumber(max, min){
    return Math.floor(Math.random()*(max - min +1) + min);
  }

//codice giocatore, devo creare una funzione che sceglie lettere a caso


function rdmLetter(){
    var letters = "ABCDEFGHILMNOPQRSTUVYXZ";
    var letter = letters[rdmNumber((letters.length - 1), 0)];
    return letter;
  }


function codeName(maxNumber, maxletter){

    var code = "";
    for (var i=0; i<maxNumber; i++){
        code += rdmNumber(9, 0);
        code += rdmletter();
    }
    for (var i=0; i<maxletter; i++){
        code += rdmNumber(9, 0);
        code += rdmletter();
    }
        
    return code;

}


 

