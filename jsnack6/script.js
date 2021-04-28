/* Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b” */


$(function(){

  var mioArray = "QuestoèUnArray";
  var a = 3;
  var b = 8;
  var nuovoArray = findList(mioArray, a, b);


  console.log(nuovoArray);

  
});



//funzioni

function findList(array, a, b){
  return array.slice(a, b);
}