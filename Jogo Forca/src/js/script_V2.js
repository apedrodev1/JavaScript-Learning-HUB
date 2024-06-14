let tentativas = 6;
let restart = true;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
let palavras = [];

fetch('palavrasDict.json')
    .then(response => response.json())
    .then(data => {
        palavras = data;
        criarPalavraSecreta();
        montarPalavraNaTela();
        criarTeclado();
    })
    .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));

function criarPalavraSecreta() {
    const indexPalavra = parseInt(Math.random() * palavras.length);
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
}

function montarPalavraNaTela() {
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavraSecreta");
    palavraTela.innerHTML = "";

    for (let i = 0; i < palavraSecretaSorteada.length; i++) {
        if (listaDinamica[i] === undefined) {
            if (palavraSecretaSorteada[i] === " ") {
                listaDinamica[i] = " ";
                palavraTela.innerHTML += "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>";
            } else {
                listaDinamica[i] = "&nbsp;";
                palavraTela.innerHTML += "<div class='letras'>" + listaDinamica[i] + "</div>";
            }
        } else {
            if (palavraSecretaSorteada[i] === " ") {
                listaDinamica[i] = " ";
                palavraTela.innerHTML += "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>";
            } else {
                palavraTela.innerHTML += "<div class='letras'>" + listaDinamica[i] + "</div>";
            }
        }
    }
}

function verificaLetraEscolhida(letra) {
    document.getElementById('tecla-' + letra).disabled = true;
    if (tentativas > 0) {
        mudarStyleLetra("tecla-" + letra, false);
        comparaListas(letra);
        montarPalavraNaTela();
    }
}

function mudarStyleLetra(tecla, condicao) {
    if (condicao === false) {
        document.getElementById(tecla).style.background = "#c71585";
        document.getElementById(tecla).style.color = "#fff";
    } else {
        document.getElementById(tecla).style.background = "#008000";
        document.getElementById(tecla).style.color = "#fff";
    }
}

async function comparaListas(letra) {
    const posicao = palavraSecretaSorteada.indexOf(letra);
    if (posicao < 0) {
        tentativas--;
        carregaImgForca();
        if (tentativas === 0) {
            abreModal("OPS! Não foi dessa vez... A palavra secreta era <br>" + palavraSecretaSorteada);
            piscarBotao();
        }
    } else {
        mudarStyleLetra("tecla-" + letra, true);
        for (let i = 0; i < palavraSecretaSorteada.length; i++) {
            if (palavraSecretaSorteada[i] === letra) {
                listaDinamica[i] = letra;
            }
        }
        let vitoria = true;
        for (let i = 0; i < palavraSecretaSorteada.length; i++) {
            if (palavraSecretaSorteada[i] !== listaDinamica[i]) {
                vitoria = false;
            }
        }
        if (vitoria) {
            abreModal("Parabéns! Você venceu...");
            tentativas = 0;
        }
    }
}

function carregaImgForca() {
    switch (tentativas) {
        case 5:
            document.getElementById("imagem").style.background = "url('./img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('./img/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('./img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('./img/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('./img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('./img/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background = "url('./img/forca.png')";
            break;
    }
}

function abreModal(mensagem) {
    let modal = document.getElementById("modal");
    let modalMensagem = document.getElementById("modalMensagem");
    modalMensagem.innerHTML = mensagem;
    modal.style.display = "block";

    document.getElementById("btnReiniciar").addEventListener("click", function () {
        restart = true;
        modal.style.display = "none";
        reset();
    });
}

function reset() {
    tentativas = 6;
    listaDinamica = [];
    criarPalavraSecreta();
    montarPalavraNaTela();
    resetTeclas();
    document.getElementById("imagem").style.background = "url('./img/forca.png')";
}

function resetTeclas() {
    const teclas = document.querySelectorAll(".tecla");
    teclas.forEach(tecla => {
        tecla.disabled = false;
        tecla.style.background = "#eee";
        tecla.style.color = "#000";
    });
}

function piscarBotao() {
    let botao = document.getElementById("btnReiniciar");
    setInterval(() => {
        botao.style.background = botao.style.background === "#00ff00" ? "#ff0000" : "#00ff00";
    }, 500);
}

function criarTeclado() {
    const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const tecladoDiv = document.getElementById("teclado");
    tecladoDiv.innerHTML = '';

    alfabeto.forEach(letra => {
        const botao = document.createElement("button");
        botao.innerHTML = letra;
        botao.id = "tecla-" + letra;
        botao.className = "tecla";
        botao.addEventListener("click", () => verificaLetraEscolhida(letra));
        tecladoDiv.appendChild(botao);
    });
}

