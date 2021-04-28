
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

