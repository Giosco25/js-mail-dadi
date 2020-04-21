//Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un
//messaggio appropriato
// Chiedere all'utente la propria mail
var email_utente = prompt('Inserisci la tua mail');
console.log('email_utente');
//creazione lista delle email
var lista_mail = ['mariorossi@gmail.com', 'pincopallo@gmail.com', 'paperino@gmail.com','pape@gmail.com','pano@gmail.com'];
var risultato = false;
for (var i = 0; i < lista_mail.length; i++) {
    if (email_utente == lista_mail[i]) {
        risultato = true;
    }
}
 if (risultato == true) {
     console.log('puoi accedere');
     document.getElementById('text').innerHTML = 'Puoi accedere';
 } else {
     console.log('non puoi accedere');
     document.getElementById('text').innerHTML = 'Non puoi accedere';
 }
