import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Ton prénom ? ", (prenom) => {
    rl.question("Ton projet préféré ? ", (projet) => {
        console.log(`${prenom} aime ${projet}.`);
        rl.close();
    });
});