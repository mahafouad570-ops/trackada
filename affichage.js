import { totalmem } from "os";

 export const afficherStatut = (nom, ok) => {
    if (ok === true) {
        console.log(`✅ dossier du projet ${nom}`)
    } else {
            console.log(`❌ dossier du projet ${nom}`)
        }
    }

  export  const afficherErreurs = (erreurs) => {
        erreurs.forEach((e) => console.log(`- ${e}`));
    }

   export const formaterListe = (items) => {
    if (items.length === 1) {
        return items[0];
    }
    return `${items.slice(0, -1).join(", ")} et ${items.at(-1)}`;
   };

   export const messageFichiers = (manquants) => {
    return `il manque ${formaterListe(manquants)}`;
   };

   export const afficherPourcentage = (ok, total) => {
    const pourcentage = Math.round((ok / total) * 100);
    let icone = "❌";
    if(pourcentage === 100) {
        icone = "✅";
    }
     console.log(`${icone} ${pourcentage}% des projets sont initialisés correctement (${ok}/${total})`);
   };
  
