//Gioco dei dadi, chi fa di più vince
//Chiedere all'utente di scrivere un numero
var numero_utente = prompt('Scrivi un numero da 1 a 6');
console.log(numero_utente);
//numero generato dal computer
var numero_generato = Math.floor(Math.random() * 6);
console.log(numero_generato);

if (numero_utente > numero generato) {
    console.log('vincitore utente');
} else if (numero utente == numero_generato){
    console.log('pareggio');
} else {
    console.log('vincitore computer');
}
