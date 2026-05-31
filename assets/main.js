console.log("script caricato");

let nCpu = Math.floor(Math.random() * 101);
let isCorrect = false;
while (isCorrect != true) {
    let nUtente = Number(prompt("indovina il numero da 1 a 100"));
    if (nUtente === nCpu) {
        console.log("indovinato il numero è", nUtente);
        isCorrect = true;
    }
    if (nUtente > nCpu) {
        console.log("sbagliato il numero è più basso di", nUtente);

    }
    if (nUtente < nCpu) {
        console.log("sbagliato il numero è più alto di", nUtente);
    }
}