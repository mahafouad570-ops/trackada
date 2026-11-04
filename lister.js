import { existsSync, readdirSync } from "fs";
import { join } from "path";
import { homedir } from "os";

const adapath = join(homedir(), "Desktop", "cli-cours", "ada-tech", "bloc1", "projets");

if (existsSync(adapath)) {
    const entrees = readdirSync(adapath);
    entrees.forEach((entree) => console.log(`- ${entree}`));
} else {
    console.log("Le dossier projets n'existe pas. ");
}