//import fs from "node:fs"
import { readFileSync, existsSync } from "fs"
import { join } from "path"
import { homedir } from "os"

const data = readFileSync("track.json", "utf-8")
const track = JSON.parse(data)
console.log(track)
console.log(homedir())

const adaPath = join(homedir(), "Desktop", "cli-cours", "ada-tech", "bloc1", "projets")
console.log(adaPath)
if (existsSync(adaPath)) {
    console.log(" Le dossier ada existe .")
} else {
    console.log(" Le dossier ada n'existe pas .")
}