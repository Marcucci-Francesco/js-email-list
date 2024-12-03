/*
**Descrizione**
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
**Bonus**
Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
mostrare le 10 email solo quando solo al termine delle 10 chiamate all’API
*/

const enpoints = 'https://flynn.boolean.careers/exercises/api/random/mail';
const list = document.getElementById('list');

// Creo una funzione per generare randomicamente il testo delle email, inizializzando una stringa vuota che concateno all'interno del ciclo for alla formula per estrapolare le lettere ed i numeri all'interno della variabile attraverso l'indice random, per poi fare un return della variabile(vuota) ora piena concatenandola alla sintassi delle email.
function getEmail() {
  const lettere = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let email = '';
  for (let i = 0; i < 10; i++) {
      email += lettere.charAt(Math.floor(Math.random() * lettere.length));
  }
  return email + '@boolean.it';
}

// Creo una funzione per pushare le dieci email random in un array vuoto dichiarando prima la funzione apposita in una const, creo le 'li' aggiungendogli le email generate e la classe per lo style della lista, una volta generate le aggiungo all' "ul" nell'html, alla fine faccio un return dell'array a questo punto completo. 
function getEmailList(num) {
  let emailMember = [];
  for (let i = 0; i < num; i++) {
    const email = getEmail();
    emailMember.push(email);
    const li = document.createElement('li');
    li.classList.add('list-style')
    li.innerText = email;
    list.append(li);
  }

  return emailMember
}

// richiamo all'interno la chiamata delle API la funzione per generare e stampare dieci email random 
axios.get(enpoints)
  .then(response => {
    console.log(response.data);
    getEmailList(10)
  })
  .catch(error => {
    console.log(error);
  })