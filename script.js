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
  let nuovoUtente = new Utente(
    nomeUtente.value,
    cognomeUtente.value,
    dataUtente.value
  );
  tabellaUtenti.innerHTML = `<table>
  <tr>
  <td>${nuovoUtente.nome}</td>
  <td>${nuovoUtente.cognome}</td>
  <td>${nuovoUtente.data}</td>
  </tr>
  </table>`;
};
