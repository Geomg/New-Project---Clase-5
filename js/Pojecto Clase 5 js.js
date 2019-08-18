let nombre = "El Mero Mero ElmerOmero";
console.log(nombre);
const numero = 8.14;

// let d = document.getElementById("unico");
let d = document.getElementsByClassName("clase");
console.log(d);
console.log(d[0]);
console.log(d.length);

let date = new Date();

document.body.innerHTML = `<h2>dehumo</h2>`;
document.body.innerHTML = `<h2>${date.getHours()}</h2>`;
document.body.innerHTML = `<h2>${date.getHours()}</h2> <h1>${date.getMinutes()}</h1> <h2>${date.getSeconds()}</h2>`;


console.log(date);