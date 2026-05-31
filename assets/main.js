console.log("script caricato");

let nCpu = Math.floor(Math.random() * 101);
let isCorrect = false;
let i = 1;
while (isCorrect === false) {
    let nUtente = Number(prompt("Indovina il numero da 1 a 100"));
    if (nUtente === nCpu) {
        console.log("hai indovinato il numero è ", nUtente, " al ", i, "° tentativo");
        isCorrect = true;
    }
    if (nUtente < nCpu) {
        console.log("il numero è più alto di ", nUtente);
    }
    if (nUtente > nCpu) {
        console.log("il numero è più basso di ", nUtente);
    }
    i++;
} 