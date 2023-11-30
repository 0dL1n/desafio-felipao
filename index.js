let nomeDoHeroi = "0dl1n";
let xp = 2000;

let niveldoheroi;

if (xp < 1000) {
    niveldoheroi = "Ferro";
} else if (xp <= 2000) {
    niveldoheroi = "Bronze";
} else if (xp <= 5000) {
    niveldoheroi = "Prata";
} else if (xp <= 7000) {
    niveldoheroi = "Ouro";
} else if (xp <= 8000) {
    niveldoheroi = "Platina";
} else if (xp <= 9000) {
    niveldoheroi = "Ascendente";
} else if (xp <= 10000) {
    niveldoheroi = "Imortal";
} else {
    niveldoheroi = "Radiante";
}

console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + niveldoheroi);
