function somademultiplos() {
    let soma = 0; // variavel soma declarada como ZERO e usamos o tipo "let", pois o valor pode ser alterado.

    for (let i = 1; i < 1000; i++) { // O valor de i é 1, se i for menor que 1000, então acrecente 1 no valor de i até chegar a 1000
        if (i % 5 === 0 || i % 7 === 0) { //se o resto da divisão de i por 5 OU 7 for igual no valor e tipo a zero.
            soma += i; //a variavel soma irá receber o valor dela que é zero mais o valor de i
        }
    }
    return soma; //irá retornar o valor o resultado
}
console.log(somademultiplos());