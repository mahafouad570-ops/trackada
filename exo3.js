import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Donne un nombre : ", (reponse) => {
    const nombre = Number(reponse.trim());
    if (isNaN(nombre)) {
        console.log("Ce n'est pas un nombre . ");
    } else {
        console.log(`Tu as saisi : ${nombre}`);
    }
    rl.close()
});