// Import stylesheets
import './style.css';

// Write Javascript code!
let result = document.getElementById('result');
let counter = document.getElementById('counter');
/*result.innerHTML = `risultato`;*/

const libro1 = {autore:"walt whitman", titolo:"leaves"};
const libro2 = {autore:"antonia pozzi", titolo:"desiderio di cose leggere"};
const libro3 = {autore:"pierluigi cappello", titolo:"stato di quiete"};

const archivio = [libro1, libro2, libro3];
var stringa_ricerca='es';
const new_archivio = [];
var count=0;


archivio.forEach(myFun, stringa_ricerca);

function myFun(libro){
  console.log('stringa e titolo: ', this, libro.titolo);
  if (libro.titolo.match(this)){
    new_archivio.push(libro.titolo);
    count++;
  } else {
    
  }  
  console.log('archivio: ', new_archivio);
  console.log('contatore ', count);
  console.log('*****')
}

result.innerHTML=new_archivio;
counter.innerHTML=count;


/*
var new_archivio;
archivio.forEach(function(libro){
  myFun(libro, stringa_ricerca);
});

function myFun(libro, str){
  let valueQ;
  if(libro.titolo==str){
    valueQ='vero';
  } else {
    valueQ='falso';
  }
}



let new_archivio=archivio.forEach(myFun);

function myFun(libro){
  console.log(libro.titolo);
}

result.innerHTML=new_archivio;







archivio.forEach(function (libro, y){
  console.log(libro.titolo);
  let value;
  if (libro.titolo==y){
    value='ciao';
  }
  return value;
});

let new_archivio = archivio.forEach(myFun(ele),stringa_ricerca);

function myFun(value, str){
  console.log(value.titolo);
  if (value.titolo==str){

  }
}

function checkArchivio(archive, str){

  let count;

  if (count=1){

  } else if (count>1){

  } else if (count<=0){

  }
}*/

/*result.innerHTML= checkArchivio(archivio, stringa_ricerca);*/


