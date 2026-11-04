import { verrifierProjet } from "./utils.js";
import { join } from "path"
import { homedir } from "os";

const dossierProjets = join(homedir(), "Desktop", "cli-cours", "ada-tech", "bloc1", "projets");
console.log(verrifierProjet(dossierProjets, "adaquiz"));