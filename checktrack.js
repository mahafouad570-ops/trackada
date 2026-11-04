import { readFileSync, existsSync } from "fs"
import { join } from "path"
import { homedir } from "os"
import { afficherStatut, afficherErreurs, afficherPourcentage, messageFichiers } from "./affichage.js"

const data = readFileSync(join(import.meta.dirname,"track.json"), "utf-8")
const track = JSON.parse(data)
const adaPath = join(homedir(), "Desktop", "cli-cours", "ada-tech", "bloc1", "projets")
// if (existsSync(adaPath)) {
//     console.log(" Le dossier ada existe .")
// } else {
//     console.log(" Le dossier ada n'existe pas .")
// }
if (existsSync(adaPath)) {
    console.log("✅ dossier ~/Desktop/cli-cours/ada-tech/bloc1/projets")
} else {
    console.log("❌  dossier ~/Desktop/cli-cours/ada-tech/bloc1/projets")
    console.log("- le dossier n'existe pas : vérifie ton arborescence de la semaine 1")
    process.exit(1)
}
let projetsCorrects = 0
track.projects.forEach((projet) => {
    const projetPath = join(adaPath, projet.name)
    const erreurs = []
    // afficherStatut(projet.name, existsSync(projetPath))
    if (!existsSync(projetPath)) {
        erreurs.push("Le dossier n'existe pas ou n'est pas nommé correctement")
    } else {

        if (!existsSync(join(projetPath, ".git"))) {
            erreurs.push("le repository git n'est pas initialisé")
        }
        const manquants = []
        projet.required.forEach((fichier) => {
            if (!existsSync(join( projetPath, fichier))) {
               manquants.push(fichier) // erreurs.push("fichier manquant : " + fichier)
            }

        })
    if (manquants.length > 0) {
        erreurs.push(messageFichiers(manquants))
    }
    }
    if (erreurs.length === 0) {
        afficherStatut(projet.name, true)
        projetsCorrects++
    } else {
        afficherStatut(projet.name, false)
        afficherErreurs(erreurs)
    }
});
const total = track.projects.length

afficherPourcentage(projetsCorrects, total)
