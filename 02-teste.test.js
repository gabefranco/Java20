const {indiceMaior, indiceMenor} = require('./02-teste')

describe('Testes dos indices maior e menor', () => {
    
    it('01 - Deve retornar o índice do maior número', () => {
        const numeros = ["7", "100", "58", "85", "41", "19", "23", "74", "11", "3", "152", "65"];
        expect (indiceMaior(numeros)).toBe(10);
    });

    it('02 - Deve retornar o índice do menor número', () => {
        const numeros = ["7", "100", "58", "85", "41", "19", "23", "74", "11", "3", "152", "65"];
        expect (indiceMenor(numeros)).toBe(9);
    });
});
