import { existsSync } from "fs"
import { join } from "path"
 export const verrifierProjet = (dossierProjets, nom) => {
    const chemin = join(dossierProjets, nom)
    const existe = existsSync(chemin)
    const gitOk = existsSync(join(chemin, ".git"))
    return { existe, gitOk}
}
