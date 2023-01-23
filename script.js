// Definisco le costanti da usare

let nomeUtente = document.getElementById("nome");
let cognomeUtente = document.getElementById("cognome");
let dataUtente = document.getElementById("data");
let loginButton = document.getElementById("login_button");
let riga1 = document.getElementById("utente1");
let riga2 = document.getElementById("utente2");
let riga3 = document.getElementById("utente3");
let prova = document.getElementById("prova");

// Creo il costruttore valido per ogni utente

const Utente = function (nome, cognome, data) {
  this.nome = nome;
  this.cognome = cognome;
  this.data = data;
};

// testo il costruttore
let esempioUtente = new Utente("Antonio", "D'Amico", "1992");
console.log(esempioUtente);

// creo un utente generico basato sul costruttore, che avrà come parametri i valori degli input
let nuovoUtente = new Utente(nomeUtente.value, cognomeUtente.value, data.value);

// Creo la funzione che registra i valori del form
loginButton.onclick = function () {
  prova.innerHTML = nuovoUtente.value;
};
