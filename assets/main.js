
console.log("script caricato");


let n = Math.floor(Math.random() * 11);
let c = false;
do {
    let i = Number(prompt("indovina il numero da 1 a 10"));

    if (i === n) {
        console.log("hai indovinato il numero segreto", n);
        c = true;
    }
} while (c === false);