// eu não tinha entendido que era pra retornar o INDICE ou seja a POSIÇÂO do maior numero, por isso fiz isso primeiro, 
//e para nao perder o codigo eu aprendi a usar o 'indexOf', para retornar a posição/indice do numero maior.

const numeros = ["7", "100", "58", "85", "41", "19", "23", "74", "11", "3", "152", "65"];

const maior = function maiorNumero(numeros) { 
    return Math.max.apply(null, numeros);
}

const menor = function menorNumero(numeros) {
    return Math.min.apply(null, numeros);
}

const indiceMaior = numeros.indexOf(maior(numeros).toString()); // esse comando indexOf consegue retornar o indice do item na matriz, e foi convertido para string depois.
const indiceMenor = numeros.indexOf(menor(numeros).toString());

console.log(" O indíce do maior número é " + indiceMaior + " e o do menor número é " + indiceMenor);
