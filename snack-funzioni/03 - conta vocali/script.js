/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function quanteVocali(string){
  for (let i = 0; i < string.length; i++){
    console.log(string[i])
  }
}

// Invoca la funzione qui e stampa il risultato in console

console.log(quanteVocali(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)