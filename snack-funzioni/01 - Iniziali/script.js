/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.

function initialWords(mioArray) {

  const newArray = [];

  let iniziali;
  
  for (let i = 0; i < mioArray.length; i++){
    iniziali = mioArray[i].at(0);
    newArray.push(iniziali);
  }

  return newArray;

}

// Invoca la funzione qui e stampa il risultato in console

console.log(initialWords(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]