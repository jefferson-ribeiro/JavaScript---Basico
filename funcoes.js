function soma (operadorA, operadorB) {
    var resultadoC = operadorA + operadorB;
    return resultadoC;
}       

function olaGama(nome){
    console.log("Olá Gama! Você é o " + nome);
}

var resultadodaSoma = soma(1, 2);
var resultadoNovodaSoma = soma (10, 66);
console.log(resultadodaSoma);
console.log(resultadoNovodaSoma);

olaGama("Jefferson");