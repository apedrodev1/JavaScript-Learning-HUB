//Calculdadora
function calc(n1, n2, operator) {
    let result;

    switch (operator) {

        case 0:
            result = (n1 + n2);
            operation = "Soma";
            break;

        case 1:
            result = (n1 - n2);
            operation = "Subtração";
            break;


        case 2:
            result = (n1 * n2);
            operation = "Multiplicação";
            break;

        case 3:
            result = (n1 / n2);
            operation = "Divisão";
            break;

        case 4:
            result = (n1 % n2);
            operation = "Divisão com resto";
            break;

        case 5:
            result = Math.pow(n1, n2);
            operation = "Exponenciação";
            break;

        case 6:
            alert = "Operação encerrada. Obrigado por utilizar nossa Calculadora";
            break;

        default:
            result = `Operador inválido, por favor digite apenas os números das operações dispóniveis: 
            - Para soma, aperte 0, 
            - Para subtração, aperte 1,
            - Para multiplicação, aperte 2, 
            - Para divisão, aperte 3,
            - Para divisão com resto (módulo), aperte 4,
            - Para exponenciação, aperte 5,
            - Para sair, aperte 6.`
    }

    return { result, operation };
}

while (true) {
    let n1 = 0 = parseFloat(prompt("Digite o primeiro valor a ser calculado: "));
    let n2 = 0 = parseFloat(prompt("Digite o segundo valor a ser calculado: "));
    let operator = parseInt(prompt(`Digite a operação a ser realizada:
0 - Soma; 
1 - Subtração;
2 - Multiplicação; 
3 - Divisão;
4 - Divisão com resto, (módulo);
5 - Exponenciação;
6 - Sair;`));

    if (operator === 6) {
        break;
    }

    let { result, operation } = calc(n1, n2, operator);
    alert(`O resultado da operação ${operation} entre ${n1} e ${n2} foi: ${result}`);
}

