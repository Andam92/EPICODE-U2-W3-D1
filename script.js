// Definisco le costanti da usare

let nomeUtente = document.getElementById("nome");
let cognomeUtente = document.getElementById("cognome");
let dataUtente = document.getElementById("data");
let loginButton = document.getElementById("login_button");
let tabellaUtenti = document.getElementById("tabella");

// Creo il costruttore valido per ogni utente

const Utente = function (nome, cognome, data) {
  this.nome = nome;
  this.cognome = cognome;
  this.data = data;
};

// testo il costruttore
let esempioUtente = new Utente("Antonio", "D'Amico", "1992");
console.log(esempioUtente);

// Creo la funzione che registra i valori del form
loginButton.onclick = function () {
  // nuovoUtente è l'oggetto creato dal costruttore, conterrà le variabili del form
  let nuovoUtente = new Utente(
    nomeUtente.value,
    cognomeUtente.value,
    dataUtente.value
  );
  // 1° METODO -> template literal per creare la tabella con le variabili
  /* tabellaUtenti.innerHTML = `<table> 
  <tr>
  <td>${nuovoUtente.nome}</td>
  <td>${nuovoUtente.cognome}</td>
  <td>${nuovoUtente.data}</td>
  </tr>
  </table>`; */

  // 2° METODO -> usare metodi createElement, createTextNode e appendChild per creare nuove linee di tabella in HTML
  let newRow = document.createElement("tr");
  let node = document.createTextNode(
    `Il nome dell'utente è: ${nuovoUtente.nome}` +
      ` ` +
      `Il cognome dell'utente è: ${nuovoUtente.cognome}` +
      ` ` +
      `La data di nascita dell'utente è: ${nuovoUtente.data}`
  );
  newRow.appendChild(node);
  let datiUtente = document.getElementById("tabella");
  datiUtente.appendChild(newRow);
};
