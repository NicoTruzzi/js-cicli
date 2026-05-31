console.log("script caricato");

const soglia = 18;

for (let i = 0; i < 4; i++) {
    let voto = prompt("inserisci un voto");
    if (voto < soglia) {
        console.log("insufficente");

    } else {
        console.log("sufficente");
    }

}
console.log("la soglia della sufficenza è ", soglia);
console.log(voto); //dimostrazione dello scope delle variabili

