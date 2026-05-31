
console.log("script caricato");
let i = 0;
let somma = 0;
let media;
let again = "si";
while (again != "no") {
    let voto = Number(prompt("inserisci un voto"));
    somma = somma + voto;
    let continua = prompt("vuoi continuare ad inserire voti?");
    if (continua === "no") {
        again = "no";
    }
    i++;
}
media = somma / i;
console.log("la media dei voti è ", media);
