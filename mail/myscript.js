//Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un
//messaggio appropriato
// Chiedere all'utente la propria mail
var email_utente = prompt('Inserisci la tua mail');
console.log('email_utente');
//creazione lista delle email
var lista_mail = ['mariorossi@gmail.com', 'pincopallo@gmail.com', 'paperino@gmail.com']
console.log(lista_mail[0]);
//controllo che sia in lista per accedere
if (email_utente == lista_mail) {
    console.log('puoi accedere');
}else{
    console.log('non puoi accedere');
}
