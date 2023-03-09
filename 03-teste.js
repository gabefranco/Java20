function somademultiplos() {
    let soma = 0;
    for (let i = 1; i < 1000; i++) {
        if (i % 7 === 0 || i % 5 === 0) {
            soma += i;
        }
    }
    return soma;
}

//console.log(somademultiplos());

module.exports = somademultiplos;