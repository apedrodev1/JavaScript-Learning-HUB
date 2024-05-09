const palavras = [
    palavra001 = {
        nome: "IRLANDA",
        categoria: "LUGARES"
    },
    palavra002 = {
        nome: "EQUADOR",
        categoria: "LUGARES"
    },
    palavra003 = {
        nome: "CHILE",
        categoria: "LUGARES"
    },
    palavra004 = {
        nome: "INDONESIA",
        categoria: "LUGARES"
    },
    palavra005 = {
        nome: "MALDIVAS",
        categoria: "LUGARES"
    },
    palavra006 = {
        nome: "INGLATERRA",
        categoria: "LUGARES"
    },
    palavra007 = {
        nome: "GROELANDIA",
        categoria: "LUGARES"
    },
    palavra008 = {
        nome: "UZBEQUISTAO",
        categoria: "LUGARES"
    },
    palavra009 = {
        nome: "INDONESIA",
        categoria: "LUGARES"
    },
    palavra010 = {
        nome: "CREGUENHEM",
        categoria: "LUGARES"
    },
    palavra011 = {
        nome: "BICICLETA",
        categoria: "TRANSPORTE"
    },
    palavra012 = {
        nome: "LANCHA",
        categoria: "TRANSPORTE"
    },
    palavra013 = {
        nome: "NAVIO",
        categoria: "TRANSPORTE"
    },
    palavra014 = {
        nome: "TELEFERICO",
        categoria: "TRANSPORTE"
    },
    palavra015 = {
        nome: "MOTOCICLETA",
        categoria: "TRANSPORTE"
    },
    palavra016 = {
        nome: "BARCO",
        categoria: "TRANSPORTE"
    },
    palavra017 = {
        nome: "AERONAVE",
        categoria: "TRANSPORTE"
    },
    palavra018 = {
        nome: "TREM",
        categoria: "TRANSPORTE"
    },
    palavra019 = {
        nome: "CAIAQUE",
        categoria: "TRANSPORTE"
    },
    palavra020 = {
        nome: "FUNICULAR",
        categoria: "TRANSPORTE"
    },
    palavra021 = {
        nome: "XICARA",
        categoria: "OBJETOS"
    },
    palavra022 = {
        nome: "MOEDA",
        categoria: "OBJETOS"
    },
    palavra023 = {
        nome: "ESPARADRAPO",
        categoria: "OBJETOS"
    },
    palavra024 = {
        nome: "SINO",
        categoria: "OBJETOS"
    },
    palavra025 = {
        nome: "CHUVEIRO",
        categoria: "OBJETOS"
    },
    palavra026 = {
        nome: "TAMBORETE",
        categoria: "OBJETOS"
    },
    palavra027 = {
        nome: "LAMPADA",
        categoria: "OBJETOS"
    },
    palavra028 = {
        nome: "BOCAL",
        categoria: "OBJETOS"
    },
    palavra029 = {
        nome: "CORTINA",
        categoria: "OBJETOS"
    },
    palavra030 = {
        nome: "LAPIS",
        categoria: "OBJETOS"
    },
    palavra031 = {
        nome: "MELANCIA",
        categoria: "ALIMENTOS"
    },
    palavra032 = {
        nome: "AMENDOIM",
        categoria: "ALIMENTOS"
    },
    palavra033 = {
        nome: "ESFIRRA",
        categoria: "ALIMENTOS"
    },
    palavra034 = {
        nome: "GOROROBA",
        categoria: "ALIMENTOS"
    },
    palavra035 = {
        nome: "JANTAR",
        categoria: "ALIMENTOS"
    },
    palavra036 = {
        nome: "SABOROSO",
        categoria: "ALIMENTOS"
    },
    palavra037 = {
        nome: "DESJEJUM",
        categoria: "ALIMENTOS"
    },
    palavra038 = {
        nome: "MASTIGAR",
        categoria: "ALIMENTOS"
    },
    palavra039 = {
        nome: "ENGOLIR",
        categoria: "ALIMENTOS"
    },
    palavra040 = {
        nome: "DOCERIA",
        categoria: "ALIMENTOS"
    },
    palavra040 = {
        nome: "DRAGAO",
        categoria: "ANIMAIS"
    },
    palavra041 = {
        nome: "GALINHA",
        categoria: "ANIMAIS"
    },
    palavra042 = {
        nome: "PAVAO",
        categoria: "ANIMAIS"
    },
    palavra043 = {
        nome: "CAMELO",
        categoria: "ANIMAIS"
    },
    palavra044 = {
        nome: "PERU",
        categoria: "ANIMAIS"
    },
    palavra045 = {
        nome: "ZEBRA",
        categoria: "ANIMAIS"
    },
    palavra046 = {
        nome: "DROMEDARIO",
        categoria: "ANIMAIS"
    },
    palavra047 = {
        nome: "CALANGO",
        categoria: "ANIMAIS"
    },
    palavra048 = {
        nome: "SAGUI",
        categoria: "ANIMAIS"
    },
    palavra049 = {
        nome: "LAGARTIXA",
        categoria: "ANIMAIS"
    },
    palavra050 = {
        nome: "HIPOPOTAMO",
        categoria: "ANIMAIS"
    },
    palavra051 = {
        nome: "A ERA DO GELO",
        categoria: "TV E CINEMA"
    },
    palavra052 = {
        nome: "HOMEM ARANHA",
        categoria: "TV E CINEMA"
    },
    palavra053 = {
        nome: "CASA MONSTRO",
        categoria: "TV E CINEMA"
    },
    palavra054 = {
        nome: "TELA QUENTE",
        categoria: "TV E CINEMA"
    },
    palavra055 = {
        nome: "STRANGER THINGS",
        categoria: "TV E CINEMA"
    },
    palavra056 = {
        nome: "O REI DO GADO",
        categoria: "TV E CINEMA"
    },
    palavra057 = {
        nome: "MULHER MARAVILHA",
        categoria: "TV E CINEMA"
    },
    palavra058 = {
        nome: "O INCRIVEL HULK",
        categoria: "TV E CINEMA"
    },
    palavra059 = {
        nome: "BOB ESPONJA",
        categoria: "TV E CINEMA"
    },
    palavra060 = {
        nome: "PANICO NA TV",
        categoria: "TV E CINEMA"
    },
]

let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;

criarPalavraSecreta();
montarPalavraNaTela();

function criarPalavraSecreta() {
    const indexPalavra = parseInt(Math.random() * palavras.length)

    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;

    console.log(palavraSecretaSorteada);
    console.log(palavraSecretaCategoria)
}

function montarPalavraNaTela() {
    const categoria = document.getElementById("categoria"); //tentar usar o .getElementByClass depois
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavraSecreta"); //tentar usar o .getElementByClass depois
    palavraTela.innerHTML = "";

    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (listaDinamica[i] == undefined) {
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = "&nbsp;";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div id='letras'>" + listaDinamica[i] + "</div>"
            }
            else {
                listaDinamica[i] = "&nbsp;"
                palavraTela.innerHTML = palavraTela.innerHTML + "<div id='letras'>" + listaDinamica[i] + "</div>"
            }
        }
    }
}

function verificaLetraEscolhida(letra) {
    if (tentativas > 0) {

        mudarStyleLetra("tecla-" + letra);

        comparaListas(letra);
        montarPalavraNaTela();
    }
}

function mudarStyleLetra(tecla) {
    document.getElementById(tecla).style.background = "#c71585" //mudar para class depois
    document.getElementById(tecla).style.color = "#fff";
}

function comparaListas(letra) {
    const posicao = palavraSecretaSorteada.indexOf(letra);
    if (posicao < 0) {
        tentativas--;
        carregaImgForca();
        //verificar se ainda tem tentativas // mensagem que errou
    } else {
        for (i = 0; i < palavraSecretaSorteada.length; i++) {
            if (palavraSecretaSorteada[i] == letra) {
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (palavraSecretaSorteada[i] != listaDinamica[i]) {
            vitoria = false;
        }
    }

    if (vitoria == true) {
        //mensagem ganhou
        tentativas = 0;
    }
}

function carregaImgForca() {
    switch (tentativas) {
        case 5:
            document.getElementById("imagem").style.background = "url('./src/media/img/forca01.png')";
            break;

        case 4:
            document.getElementById("imagem").style.background = "url('./src/media/img/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('./src/media/img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('./src/media/img/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('./src/media/img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('./src/media/img/forca06.png')";
            break;

        default:
            document.getElementById("imagem").style.background = "url('./src/media/img/forca.png')";
            break;

    }
}



