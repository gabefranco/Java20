//*************** OPERADORES //***************

// 01 - Operadores Matemáticos Simples (+ - * /)

/* var valor1, valor2, total;
valor1 = 2;
valor2 = 10;
total = valor1 / valor2;
console.log(total); */

// 02 - Operadores de Incremento e Decremento (++ --)

/* var valor1, valor2, total;
valor1 = 5;
valor2 = 10;
total = --valor1
console.log("O resultado é " + total, "e o valor1 é " + valor1); */

// 03 - Operadores de Atribuição (= += -= *= /=)

/* var valor1, valor2, total;
valor1 = 5;
valor2 = 10; */

/* valor1 = valor1 + valor2 // Essa forma pode ser traduzida assim:
valor1 += valor2 // Desse jeito o valor1 irá receber a soma do valor1 mais o valor2

// Pode se fazer a mesma coisa para valores negativos, usando o sinal de -
valor1 = valor1 - valor2 // Essa forma pode ser traduzida assim:
valor1 -= valor2 // Desse jeito o valor1 irá receber a subtração do valor1 menos o valor2

// Pode se fazer a mesma coisa para multiplicação e divisão, usando o sinal de * /
valor1 = valor1 * valor2 // Essa forma pode ser traduzida assim:
valor1 *= valor2 // Desse jeito o valor1 irá receber a multiplicação do valor1 vezes o valor2

valor1 = valor1 / valor2 // Essa forma pode ser traduzida assim:
valor1 /= valor2 // Desse jeito o valor1 irá receber a divisão do valor1 dividido pelo valor2 */

//console.log(valor1)

// 04 - Operadores de Sequencia são usados para juntar textos "texto" e o sinal de + será usado para concatenar esse texto.

// 05 - Operadores de Comparação ( == === != !== < <= > >=)
// São utilizados para retornar valores lógicos, true ou false, se é verdadeiro ou falso.
/* 
var valor1, valor2, total;
valor1 = 8;
valor2 = 12;

//total = (valor1 == valor2) // Verifica se os valores são iguais. Quando não se está usando if ou else, se usa os termos dentro de ()
//total = (valor1 === valor2) // Verifica se os valores e os tipos de dados são iguais 
//total = (valor1 != valor2) // Verifica se os valores são diferentes 
//total = (valor1 !== valor2) // Verifica se os valores são diferentes e de tipos diferentes.

// = o sinal de igual é usado para atribuir um valor há uma variavel.
// == o sinal de "dois iguais" já é usado para fazer uma comparação, no caso acima para verificar se o valor1 é igual ao valor2
// E esse resultado será atribuido à variavel "total"
// === Neste caso usamos para verificar se o valor é igual e se o tipo de dado tb são iguais, no caso de fazer uma soma de
// um numero do tipo inteiro e de um texto do tipo string, ex.: 8 + "8", no caso retornaria o valor de false, pois ambos são 8,
// porém são de tipos diferentes.
// != Verifica se os valores são diferentes ou não igual.
// !== Verifica se os valores são diferentes ou não iguais e se o tipo dos dados são diferentes. Vai retornar true ou false.

console.log(total) */

/* // 06 - Operador Condicional (Ternário) ( ? : )
// Essa condição ternária permite que possamos fazer uma condição dentro da variavel, como se fosse uma formuça no excel.
// ? Se for positivo
// : Senão

var idade, eleitor;
idade=16
eleitor = (idade<16) ? "Não é Eleitor" : "Sim, é Eleitor"; // a lógica aqui é o parametro de verdadeiro ou false, 
                                                        // depois separa com o sinal de ? para fazer o retorno da condição 
                                                        // caso ela seja verdadeira, depois separa com : para fazer o senão.
console.log(eleitor)
 */

/* // 07 - Operadores Logícos ( && || ! )
// São usados para quando se precisa fazer mais de uma condição.
// && função E
// || função OU
// ! Negação, para dizer o contrário do que foi declarado

var idade, eleitor;
idade=73
eleitor = (idade<16) ? "Não é Eleitor" : "Sim, é Eleitor";
resultado = (idade > 60 && idade < 70); // esse sinal && é a mesma função E na matemática
resultado = (idade===65 || idade===73); // esse sinal || é a mesma função OU na matemática
resultado = !(idade===65); // nesse caso estamos negando o que foi declarado, e vai retornar false.
console.log(resultado)
 */

// ******************* OBJETOS ********************* //

/* const carro = {
    marca: "Ford",
    modelo: "Fiesta",
    ano: "2018",
    buzina: function () { // podemos criar uma função dentro do objeto
        return 'biiiiiiiiiii';
    }, 
}
console.log(carro) // para chamar o metodo/ação buzina, deve-se usar (carro.buzina) */

//******************** FUNÇÕES *******************//

// FUNÇÃO DE SOMA
/* function soma (valor1, valor2){
    return valor1 + valor2;
}
var total = soma(10,23);
console.log(total) */

/* // FUNÇÃO DE COTAÇÃO DO DOLAR
function realDolar(real, cotacaoDolar) {
    return real * cotacaoDolar;
}
var totalReal = realDolar(10, 5.80)
console.log(totalReal)
 */
// FUNÇÃO OLÁ MUNDO
/* function olaMundo(text1){
    return text1;
}
console.log(hello); */

// EXEMPLO 01
/* function ola(text1) { // Essa função chamada "ola", têm um parametro chamado "text1"
    return text1; // aqui retorna o parametro "text1"
}
console.log(ola('Mundo')) // aqui chamamos a função "ola" e colocamos a informação que terá dentro do parametro "text1"
// que é a palabra "Mundo" */

// EXEMPLO 02
/* function ola(text1) { // Essa função chamada "ola", têm um parametro chamado "text1"
    return `Olá ${text1}`; // aqui retorna o parametro "text1", SE ADICIONARMOS APOSTROFE E ESCREVER UM TEXTO E CHAMAR
                            // A FUNÇÃO, PRECISAMOS USAR O ${NOME_FUNCAO} E FECHAR COM APOSTROFO.
}
console.log(ola('Mundo')) // aqui chamamos a função "ola" e colocamos a informação que terá dentro do parametro "text1"
// que é a palabra "Mundo" */

// FUNÇÃO ANONIMA E EXECUTADA ASSIM QUE É FINALIZADA
//EXEMPLO
/* (function (text3){ // ela não tem um NOME // e deve ser iniciada com ()
    console.log(text3)
})('Olá Mundo 2') // informação que terá dentro do parametro */

// FUNÇÃO DENTRO DE UMA VARIAVEL
/* var gabe = function hello (text5){ // a função hello está dentro da variavel "gabe" e irá retornar o que iremos informar no "text5"
    return (text5);
}
console.log(gabe('Olá Mundo do Gabe')) // para funcionar temos que chamar a variavel criada "gabe" */

/* function hello (text5){
    return (text5);
}
console.log(hello('Olá Mundo do Gabe 2')) // mesmo função de cima sem o uso da variavel, neste caso chamamos o a função "hello" */

// ************ ARRAYS ***************///

// São usados para armazenar varios valores em uma unica variavel
// No array, diferente dos Objetos, os itens dentro dele são encontrados na posição dentro da matriz,
// eles não tem Propriedades ex: Marca.Ford, em array se usa apenas o "Ford", "2018", separados por ,
// a lista sempre começa na posição zero.
// Aqui sempre se trabalha com COLCHETES [] e nos objetos com CHAVES {}.
// Um array funciona como se fosse um mini banco de dados dentro de uma variavel. TOP né.

//const listMerc = ["berinjela", "abobrinha", "tomate", "cebola"];

//console.log(listMerc) // para listar todos os itens dentro da matriz.

//console.log(listMerc.length) // para saber quantos itens existem dentro da matriz.

//console.log(listMerc[listMerc.length -1]) // Esse comando irá retornar o "ultimo" item da matriz

//listMerc.push("Rucula"); // Esse comando acrescenta 1 item na matriz

//listMerc[10] = "Acelga"; // Adicionei um item na matriz na posição 10, porém ela tinha apenas 4 itens (até a 3 posição), por isso ela
// criou 6 itens vazios

//console.log(Array.isArray(listMerc)); // Esse comando verifica se a "variavel" é uma matriz mesmo

//***************** METODOS DE ARRAY ************************/

//const listMerc = ["berinjela", "abobrinha", "tomate", "cebola"];

//console.log(listMerc.join(" * ")); // dessa forma podemos acrescentar qlq coisa entre os itens da matriz, ficando assim: "berinjela * abobrinha * tomate * cebola"

//listMerc.pop(); // esse comando "pop" remove o ultimo item da matriz.
//listMerc.shift(); // esse comando "shift" remove o primeiro item da matriz.
//listMerc.push("Gabe"); // esse comando "push" adiciona um item depois do ultimo ligar na matriz.
//listMerc.unshift("Gabe"); // Esse comando"unShift", adiciona um item antes do primeiro item na matriz.
//listMerc.splice(3,0,"Manga", "Abacate", "Alho") // Esse é top. rs. Esse comando permite add um item em uma posição especifica. "3" é a posição, "0" é a qtde de itens a serem deletados ou zero pra não deletar nada, e declara os itens a serem add.

//console.log(listMerc);

// **** Fazendo uma junção de várias Matrizes usando "concat".

/* const lista1 = ["Manga", "Maça", "Limão", "Morango"];
const lista2 = ["Sabão", "Detergente", "Amaciante"];

const listaCompleta = lista1.concat(lista2);

console.log(listaCompleta); */

// ++++++ Usando o Slice para fatiar uma matriz // vc pode determinar a partir da posição a ser mostrada ou de uma posição até outra.
// lembrando que a posição final indica a posição anterior a ela., ex.: (3,6) o 3 é inicial, o 6 é a ultima, e vai retornar até a 5.

/* const futebol = ["dogador1", "hogador2", "aogador3", "jogador4", "gogador5", "togador6", "xogador7", "zogador8", "logador9"];
//const premios = futebol.slice(3, 6);
//console.log(premios)

// Colocar o resultado acima em ordem alfabetica. Isso serve para "texto"

/* const ordemAlf = futebol.sort(); // ordem alfabetica crescente
futebol.reverse(); // ordem alfabetica decrescente
console.log(ordemAlf); // primeiro vc coloca em ordem alfabetica crescente para depois colocar em ordem alfabetica descrescente; */

// se estiver usando numeros, pode-se usar o mesmo comando, porém precisa criar uma função a,b, onde ele compara a dois numeros
// se são maiores ou menores e ai pede para retornar isso, de forma que eles estejam em ordem numerica.
// exemplo:

//const numeros = ["7", "100", "58", "85", "41", "19", "23", "74", "11"];
//console.log(numeros.sort()); // dessa forma ele coloca em ordem alfabetica ()
//console.log(numeros.sort(function (a, b) { return (a-b)})); 