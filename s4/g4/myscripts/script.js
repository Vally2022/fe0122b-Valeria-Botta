//toUpperCase e ToLowerCase

var frase1 = "Oggi ho la testa che mi scoppia";
document.getElementById('test1').innerText = frase1.toUpperCase();
document.getElementById('test2').innerText = frase1.toLowerCase();


//slice
var long = frase1.length;
console.log(long);
var frase2 = frase1.slice(0, 4);
console.log(frase2);
var frase3 = frase1.slice(8, 16);
console.log(frase3);
var frase4 = frase1.slice(21, 31)
console.log(frase4);

//concat2
var nuova1 = frase3.concat(" è in fumo");
console.log(nuova1);

//concat 1
var nuova = frase1.concat(" e il cervello è crashato");
document.getElementById('test3').innerText = nuova;

//array

var people = ['Giacomo', 'Lucia', 'Luca', 'Roberta'];
console.log(people);
console.log(people.slice(2,3));
console.log(people[2]);
console.log(people.length);


people.toString;
document.getElementById('test3').innerHTML = people;


var persona = ['Valeria', '32 anni', 'Napoli'];
console.log(persona);

var cancella1 = persona.pop();
console.log(persona);
console.log('elimina: '+ cancella1);
var add1 = persona.push('Ragazza');
console.log(persona);
console.log('aggiunge: ' + add1);


var cancella2 = persona.shift();
console.log(persona);
console.log('elimina: ' + cancella2);

var add2 = persona.unshift('Giovane');
console.log(persona);
console.log('aggiunge: ' + add2);
