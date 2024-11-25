/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

const vocali = [`a`, `e`, `i`, `o`, `u`];
let counter = 0;

function quanteVocali(string){
  for (let i = 0; i < string.length; i++){
    if (vocali.includes(string[i].toLowerCase())) counter++;
  }
  return counter;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(quanteVocali(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)