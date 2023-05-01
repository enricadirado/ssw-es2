// Import stylesheets
import './style.css';

// Write Javascript code!
let result = document.getElementById('result');
let counter = document.getElementById('counter');

const libro1 = {autore:"walt whitman", titolo:"leaves"};
const libro2 = {autore:"antonia pozzi", titolo:"desiderio di cose leggere"};
const libro3 = {autore:"pierluigi cappello", titolo:"stato di quiete"};

const archivio = [libro1, libro2, libro3];
const new_archivio = [];
var stringa_ricerca='es';
var count=0;

archivio.forEach(myFun, stringa_ricerca);

function myFun(libro){
  if (libro.titolo.match(this)){
    new_archivio.push(libro.titolo);
    new_archivio.push(libro.autore);
    count++;
  } 
}

if (count==1){
  result.innerHTML='libro trovato: "' + new_archivio[0] + '" di ' + new_archivio[1];
  console.log(new_archivio[0]);
} else if (count>1){
  result.innerHTML=new_archivio;
  counter.innerHTML='libri trovati: ' + count;
} else if (count==0){
  result.innerHTML='nessun libro trovato';
}

