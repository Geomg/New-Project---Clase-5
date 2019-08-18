let nombre = "El Mero Mero ElmerOmero";
console.log(nombre);
const numero = 8.14;

//let d = document.getElementById("unico");
let d = document.getElementsByClassName("clase");
console.log(d);
console.log(d[0]);
console.log(d.length);

let date = new Date();

//document.body.innerHTML = `<h2>dehumo</h2>`;
//document.body.innerHTML = `<h2>${date.getHours()}</h2>`;
//document.body.innerHTML = `<h2>${date.getHours()}</h2> <h1>${date.getMinutes()}</h1> <h2>${date.getSeconds()}</h2>`;
console.log(date);

let text = document.createTextNode(`Esto es un nodo`);
document.getElementById("pp").appendChild(text);

let clase = window.document.getElementById('id');
console.log(clase);
//clase.style.backgroundColor = '#ff9e01';
clase.classList.add('negativo');

let remove = document.getElementById('h');
//h.classList.remove( 'clase');
remove.style.cssText = "font-size: 40px; color: blue;";









