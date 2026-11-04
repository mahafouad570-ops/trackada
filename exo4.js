import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("Vérification de tous les projets ada en cours....");
rl.question("Lancer la vérification compléte ? (o/n) ", (reponse) => {
    if (reponse.trim().toLowerCase() === "o") {
        console.log("Vérification lancée.");
    } else {
        console.log("Annulé .");
    }
    rl.close()
})