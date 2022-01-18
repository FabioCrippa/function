//=>estrutura basica
//function nomeDaFuncao (A, B) {
    //return A + B; //return - devolve externamente o resultado do que queremos retornar
//}
//console.log(nomeDaFunncao(valorA, valorB))

function somar(a, b) {
    return a + b;
}
console.log(somar(10, 40))

//=>estrutura funcao declarada
//function nomeFuncao(a, b) {
    //console.log("Estou somando...")
    //return a + b
//}
//let resultadoSoma = nomeFuncao(1, 2);
//console.log(resultadoSoma); ou console.log(nomeFuncao(1, 2));

function somar2(a, b) {
    return a + b;
}
let resultadoSoma = somar2(10, 20);
console.log(resultadoSoma);

//=>estrutura funcao expressiva
//const nomeFuncao = function(a, b) {
    //return a * b;
//}
//nomeFuncao(2, 10);
//console.log(resultadoMultiplicar);

const multiplicar2 = function (a, b) {
    return a * b;
}
multiplicar2(2, 10);
console.log(multiplicar2);

//=>estrutura escopo global 
//variavel declarada fora de uma funcao

//let nomeFuncao = "Java";
//function nomeFuncao2() {
    //return nomeFuncao;
//}
//console.log(nomeFuncao2());

let melhorLinguagem = "Java";
function estouAprendendo() {
    return melhorLinguagem    
}
console.log(melhorLinguagem);


//escopo local
//dentro de uma funcao
//funciton ola() {
    //let s = "oiee";
    //return s;
//}

const multiplicar = function(a, b) {
    console.log("Estou multiplicando...")    
    return a * b;
}
console.log(multiplicar(2, 100));