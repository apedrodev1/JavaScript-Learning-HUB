//Calculdadora
function calc(n1, n2, operator) {
    let result, operation;

    switch (operator) {

        case 0:
            result = (n1 + n2);
            operation = "soma";
            break;

        case 1:
            result = (n1 - n2);
            operation = "subtração";
            break;

        case 2:
            result = (n1 * n2);
            operation = "multiplicação";
            break;

        case 3:
            if (n2 !== 0) {
                result = n1 / n2;
                operation = "divisão";
            } else {
                result = "Erro: Divisão por zero";
                operation = "";
            }
            break;

        case 4:
            if (n2 !== 0) {
                result = n1 % n2;
                operation = "divisão com resto";
            } else {
                result = "Erro: Divisão por zero";
                operation = "";
            }
            break;

        case 5:
            if (n2 !== 0) {
                result = Math.pow(n1, n2);
                operation = "exponenciação";
            } else {
                result = "Erro: Base zero elevada a zero é indefinida.";
                operation = "";
            }
            break;

        case 6:
            if (n1 >= 0) {
                n2 = 0;
                result = Math.sqrt(n1);
                operation = "raiz quadrada";
            } else {
                result = "Erro: Não é possível calcular a raiz quadrada de um número negativo";
                operation = "";
            }
            break;

        case 7:
            alert = "Operação encerrada. Obrigado por utilizar nossa Calculadora";
            break;

        default:
            result = `Operador inválido, por favor digite apenas os números das operações dispóniveis:\n 
            - Para soma, aperte 0,\n 
            - Para subtração, aperte 1,\n
            - Para multiplicação, aperte 2,\n 
            - Para divisão, aperte 3,\n
            - Para divisão com resto (módulo), aperte 4,\n
            - Para exponenciação, aperte 5,\n
            - Para raiz quadrada, aperte 6,\n
            - Para sair, aperte 7.`
    }

    return { result, operation };
}

while (true) {
    let n1 = parseFloat(prompt("Digite o primeiro valor a ser calculado: "));
    let n2 = parseFloat(prompt("Digite o segundo valor a ser calculado: "));

    if (isNaN(n1) || isNaN(n2)) {
        alert("Erro: Por favor, insira números válidos.");
        continue;
    }

    let operator = parseInt(prompt(`Digite a operação a ser realizada:
0 - Soma,\n
1 - Subtração,\n
2 - Multiplicação,\n
3 - Divisão,\n
4 - Divisão com resto, (módulo),\n
5 - Exponenciação: o primeiro número será a base e o segundo número será o expoente.\n 
6 - Raiz Quadrada: informe apenas o primeiro número; o segundo número será automaticamente definido como 0.\n
7 - Sair.`));

    if (operator === 7) {
        break;
    }

    let { result, operation } = calc(n1, n2, operator);
    alert(`O resultado da operação de ${operation} entre ${n1} e ${n2} foi: ${result}`);
}

