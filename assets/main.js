
console.log("script caricato");
const pw = "boolean";
let isCorrect = false;

for (let i = 0; i < 3 && isCorrect === false; i++) {
    let pwu = prompt("inserisci la password");
    if (pwu === pw) {
        console.log("benvenuto");
        isCorrect = true;
    }
}
if (isCorrect === false) {
    console.log("bloccato");
}