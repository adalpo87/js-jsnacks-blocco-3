//jsnack5


var arraySquadra = [
  {
   nome: "Marco"
  },
  {
    nome: "Alessandro"
   },
   {
    nome: "Stefano"
   },
   {
    nome: "Mario"
   },
   {
    nome: "Andrea"
   }
];

for (var player of arraySquadra){
  player.code = codegen();
  player.media = rdmNumber(0, 50);
  player.perc = rdmNumber(0, 100);
}

console.log(arraySquadra);

//generatore di codici
function codegen(){
  var code = "";
//generazione del codice
  var alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];
//codice
  while (code.length < 3){
    code += alfabeto[rdmNumber(0, alfabeto.length - 1)]
  }
  
  while (code.length < 6){
    code += rdmNumber(0,9);
  }
  return code;
}

//generatore di numeri casuali
function rdmNumber(min, max){
  return Math.floor(Math.random()*(max - min + 1)+min);
}
