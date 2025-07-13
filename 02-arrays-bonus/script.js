const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse();
console.log(reversedTeachers);


// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    longNames.push(teachers[i]);

  }
}
console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers

teachers.splice(5, 1);
console.log(teachers);
// Ho eliminato l'elemento che si trova in posizione 5
// Ricorda che al momento l'array non è più quello iniziale ma è capovolto

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent

let verifico = [];
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] === 'Fabio') {
    verifico.push('true');
    
  } else {
    verifico.push('false');
    
  }
}
console.log(verifico);

const true_index = verifico.indexOf('true');
let isFabioPresent = ''

if (true_index == -1) {
  isFabioPresent = 'Fabio non è presente';
} else {
  isFabioPresent = 'Fabio è presente';
}

console.log(isFabioPresent);




// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = null;