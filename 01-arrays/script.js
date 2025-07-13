const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];
console.log(fourthTeacher);


// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
const new_teacher = 'Patrick';
const indice = 4;
teachers.splice(indice, 1, new_teacher);
console.log(teachers); 

//NOTA BENE: Se scrivi const/let nuovo_array= teachers.splice(indice, 1, new_teacher); e fai il log di nuovo_array
//restituisce l'elemento eliminato NON L'ARRAI MODIFICATO


// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop();
console.log(lastTeacher);


// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift();
console.log(firstTeacher);


// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push('Vanessa');
console.log(teachers);


// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift('Sarah');
console.log(teachers);

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = teachers.indexOf('Lewis');
console.log(lewisIndex);


// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty

if (teachers.length == 0) {
  let isTeachersEmpty = 'array vuoto';
  console.log(isTeachersEmpty);
} else {
  let isTeachersEmpty = ' array non vuoto';
  console.log(isTeachersEmpty);
}

// L'ultimo esercizio credo si possa fare meglio, ovvero in modo più compatto.. 
