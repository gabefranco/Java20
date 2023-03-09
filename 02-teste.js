
const numeros = ["7", "100", "58", "85", "41", "19", "23", "74", "11", "3", "152", "65"];

const indiceMaior = function () {
    const maior = function (numeros) {
        return Math.max.apply(null, numeros);
    }
    return numeros.indexOf(maior(numeros).toString());
}

const indiceMenor = function () {
    const menor = function (numeros) {
        return Math.min.apply(null, numeros);
    }
    return numeros.indexOf(menor(numeros).toString());
}

module.exports = {
    indiceMaior,
    indiceMenor
}; 