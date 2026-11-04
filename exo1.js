import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Quel est ton prénom ? ", (prenom) => {
    console.log(`Bonjour ${prenom} !`);
    rl.close();
})