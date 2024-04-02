const mainContainer = document.querySelector("main");

const numeros = chunk(
    Array.from({ length: 60 }, (_, i) => i + 1),
    10
);

numeros.forEach((chunk) => {
    const div = document.createElement("div");
    mainContainer.appendChild(div);

    chunk.forEach((numero) => {
        const button = document.createElement("button");
        button.id = `num_${numero}`;
        button.addEventListener("click", () => selecionarNumeros(numero));
        button.textContent = numero < 10 ? `0${numero}` : numero;

        div.appendChild(button);
    });
});

const numerosApostados = [];
const resultado = [];
let valorAposta = 0;
let qtdAcertos = 0;

const btnApostar = document.getElementById("btnApostar");
btnApostar.disabled = true;

console.log(numeros);

sortearNumeros();

// Dividir o array de números em sub-arrays
function chunk(array, chunkSize) {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunkedArray.push(array.slice(i, i + chunkSize));
    }
    return chunkedArray;
}

// #region Alterar Tema

// Obtenha a entrada de alternância do tema
const themeToggle = document.querySelector('.switch input[type="checkbox"]');
// Função que irá mudar o tema com base em se a alternância do tema está marcada ou não
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
    }
}
// Adicione um ouvinte de evento ao alternador de tema, o que mudará o tema
themeToggle.addEventListener("change", switchTheme, false);

// Obtenha o tema atual do armazenamento local
const currentTheme = localStorage.getItem("theme");
// se o item de armazenamento local atual pode ser encontrado
if (currentTheme) {
    //  Defina o atributo body data-theme para corresponder ao item de armazenamento local
    document.documentElement.setAttribute("data-theme", currentTheme);
    // Se o tema atual estiver escuro, verifique a alternância do tema
    if (currentTheme === "dark") {
        themeToggle.checked = true;
    }
}

// #endregion

function sortearNumeros() {
    // otimizar essa funcao mais tarde
    for (i = 0; i < 6; i++) {
        let numeroSorteado = Math.round(Math.random() * 59 + 1); //Math.floor tentar mais tarde

        // verifica se o número sorteado exite na lista, enquanto exixtir ele vai sortear um nopvo número
        while (resultado.includes(numeroSorteado)) {
            let numeroSorteado = Math.round(Math.random() * 59 + 1);
        }
        resultado.push(numeroSorteado); // insere o número sorteado na lista
    }
}

function selecionarNumeros(numero) {
    if (numerosApostados.length >= 0 && numerosApostados.length < 20) {
        // add o numero a lista
        numerosApostados.push(numero);

        //desabilita o numero escolhido - nao funciona, ver
        desabilitarNumeroEscolhido(numero);

        // condic que habilita o botao "Apostar"
        if (numerosApostados.length > 5) {
            btnApostar.disabled = false;

            valorDaAposta();
        }

        // mostra quantidade de numeros apostados
        const qtdApostas = document.getElementById("qtdNumeros");
        qtdApostas.innerHTML =
            "<p>Qtd Numeros</p><p class='valor'>" +
            numerosApostados.length +
            "</p > ";
    }
}

function desabilitarNumeroEscolhido(numero) {
    document.getElementById("num_" + numero).disabled = true;
    document.getElementById("num_" + numero).style.background = "#009e4c";
    document.getElementById("num_" + numero).style.color = "#fff";
}

function valorDaAposta() {
    switch (numerosApostados.length) {
        case 6:
            valorAposta = "R$ 5,00";
            break;
        case 7:
            valorAposta = "R$ 35,00";
            break;
        case 8:
            valorAposta = "R$ 140,00";
            break;
        case 9:
            valorAposta = "R$ 420,00";
            break;
        case 10:
            valorAposta = "R$ 1.050,00";
            break;
        case 11:
            valorAposta = "R$ 2.310,00";
            break;
        case 12:
            valorAposta = "R$ 4.620,00";
            break;
        case 13:
            valorAposta = "R$ 8.580,00";
            break;
        case 14:
            valorAposta = "R$ 15.015,00";
            break;
        case 15:
            valorAposta = "R$ 25.025,00";
            break;
        case 16:
            valorAposta = "R$ 40.040,00";
            break;
        case 17:
            valorAposta = "R$  61.880,00";
            break;
        case 18:
            valorAposta = "R$ 92.820,00";
            break;
        case 19:
            valorAposta = "R$ 135.660,00";
            break;
        case 20:
            valorAposta = "R$ 193.800,00";
            break;
        default:
            valorAposta = "R$ 0,00";
            break;
    }

    const divValorAposta = document.getElementById("valor");
    divValorAposta.innerHTML =
        "<p>valor da Aposta</p><p class='valor'>" + valorAposta + "</p>";
}

function apostar() {
    for (i = 0; i < numerosApostados.length; i++) {
        //confere os acertos e coloca os valores na var qtdAcertos
        if (resultado.includes(numerosApostados[i])) {
            qtdAcertos++;
        }
    }
    //mostra o resultado
    const divResultado = document.getElementById("resultado");
    for (i = 0; i < resultado.length; i++) {
        divResultado.innerHTML +=
            "<div class='resultadoCircle'>" + resultado[i] + "</div>";
    }

    //mostra qtd de acertos
    let divAcertos = document.getElementById("acertos");
    divAcertos.innerHTML =
        "<p>Acertos</p><p class='valor'>" + qtdAcertos + "</p>";

    //desabilitar todos botoes
    desabilitarTodosNumeros();

    //habilitar o botao reiniciar
    document.getElementById("btnReiniciar").style.display = "inline";
    document.getElementById("btnApostar").disabled = true;
}

function desabilitarTodosNumeros() {
    for (i = 1; i <= 60; i++) {
        document.getElementById("num_" + i).disabled = true;
    }
}

let btn = document.querySelector("#btnReiniciar");
btn.addEventListener("click", function () {
    location.reload();
});

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");

        // Defina a preferência de tema do usuário como escuro
        localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");

        // Defina a preferência de tema do usuário como claro
        localStorage.setItem("theme", "light");
    }
}
