let diasVida = parseInt(prompt("Cuántos días has vivido",""));


if (diasVida === "string") {
    console.error("Ese no es un número"); 
}
let numAnos = Math.floor(diasVida / 365);
let diasRestantes = diasVida % 365 ;
let numMeses = Math.floor(diasRestantes / 30);
diasRestantes = diasRestantes % 30;

alert("Ha vivido " + numAnos + " años, " + numMeses + " meses y " + diasRestantes + " días.");

