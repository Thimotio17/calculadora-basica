console.log("Calculadora básica, o que deseja? :)");
let prompt = require('prompt-sync')();

function calcular(numb1, numb2, operador) {
    switch(operador) {
        case '+':
            return numb1 + numb2;
        case '-':
            return numb1 - numb2;
        case '*':
            return numb1 * numb2;
        case '/':
            if(numb2 === 0) {
                return "Erro divisão por 0";
            }
            return numb1 / numb2;
        case '%':
            return (numb1 / 100) * numb2;
        default:
            return 'Operador inexistente, utilize apenas +, -, *, / ou %';
    }
}

let numb1 = parseFloat(prompt('Digite o primeiro número: '));
let operador = prompt('Digite o operador (+)   (-)  (*)  (/)  (%)');
let numb2 = parseFloat(prompt('Digite o segundo número: '));

let resultado = calcular(numb1, numb2, operador);

console.log("-".repeat(40));
console.log("| RESULTADO | " + "(" + resultado + ")");
console.log("-".repeat(40));
