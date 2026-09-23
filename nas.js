const prompt = require("prompt-sync")();
let etudiants = ["El mehdi","Taha","Nasser","Asia","Mohammed"]
for (let i = 0; i < etudiants.length; i++) {
    if(!etudiants[i].includes("a")) {
        console.log(etudiants[i])
    }


}
