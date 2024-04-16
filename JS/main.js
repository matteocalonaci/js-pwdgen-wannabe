
let nome = prompt("come ti chiami?");
let surname = prompt("qual'è il tuo cognome?");
let color = prompt("qual'è il tuo colore preferito?");

let risultato = (nome + surname + color);

let msg = "La password generata è:"

document.getElementById("password").innerHTML = msg + risultato + "#24";

