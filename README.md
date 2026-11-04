# Trackada

Trackada est un outil en ligne de commande écrit en Node.js.
Il lit le fichier track.json et vérifie que chaque projet du bloc 1 est présent dans le dossier projets/, initialisé en Git et qu'il contient tous les fichiers requis.
À la fin, il affiche le pourcentage de projets corrects.

## Lancer le script

1. Ouvrir un terminal
2. Aller dans le dossier du projet :
   cd ~/Desktop/cli-cours/ada-tech/bloc1/projets/trackada
3. Lancer :
   node checktrack.js

## Exemple d'affichage

✅ dossier ~/Desktop/cli-cours/ada-tech/bloc1/projets
✅ dossier du projet adapage
❌ dossier du projet adaquiz
- il manque questions.js
❌ dossier du projet adalgo
- le repository git n'est pas initialisé
- il manque package.json et README.md
❌ 14% des projets sont initialisés correctement (1/7)

## Avec une semaine de plus

- Vérifier un seul projet en saisissant son nom (avec readline)
- Ajouter des couleurs dans le terminal