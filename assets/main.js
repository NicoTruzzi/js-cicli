
console.log("script caricato");
let finish = false;
let somma = 0;
do {
    let prezzo = Number(prompt("inserisci un prezzo"));
    somma = somma + prezzo;
    if (prezzo === 0) {
        finish = true;
    }
} while (finish != true)
console.log("la somma dei prezzi è", somma);
