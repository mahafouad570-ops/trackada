import { readFileSync, existsSync } from "fs"
import { join } from "path"
import { homedir } from "os"
import { afficherStatut, afficherErreurs, afficherPourcentage } from "./affichage.js"

const data = readFileSync("track.json", "utf-8")
const track = JSON.parse(data)
const adaPath = join(homedir(), "Desktop", "cli-cours", "ada-tech", "bloc1", "projets")
if (existsSync(adaPath)) {
    console.log(" Le dossier ada existe .")
} else {
    console.log(" Le dossier ada n'existe pas .")
}
let projetsCorrects = 0
track.projects.forEach((projet) => {
    const projetPath = join(adaPath, projet.name)
    const erreurs = []
    afficherStatut(projet.name, existsSync(projetPath))
    if (!existsSync(projetPath)) {
        erreurs.push("Le dossier n'existe pas ou n'est pas nommé correctement")
    } else {

        if (!existsSync(join(projetPath, ".git"))) {
            erreurs.push("le repository git n'est pas initialisé")
        }
        projet.required.forEach((fichier) => {
            if (!existsSync(join( projetPath, fichier))) {
                erreurs.push("fichier manquant : " + fichier)
            }

        })
    
    }
    if (erreurs.length === 0) {
        console.log("✅" + projet.name)
        projetsCorrects++
    } else {
        console.log("❌" + projet.name)
        afficherErreurs(erreurs)
    }
});
const total = track.projects.length

afficherPourcentage(projetsCorrects, total)
