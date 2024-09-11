const randomNumbers = [];
while (randomNumbers.length < 9) {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
    }
}

const newRandomNumbers = [];
function clicou() {
    const conteudoDosNumeros = document.querySelector('#section_princ');
    const button_reveal = document.querySelector('#number_button_reveal')

    if (conteudoDosNumeros.classList.contains('container_principal')) {
        conteudoDosNumeros.classList.remove('container_principal');
        conteudoDosNumeros.classList.add('hide_container_principal');
        button_reveal.classList.remove('button_reveal')
    } else {
        conteudoDosNumeros.classList.remove('hide_container_principal');
        conteudoDosNumeros.classList.add('container_principal');
        button_reveal.classList.add('button_reveal_hide');
    }

    for (let n = 1; n < 10; n++) {
        const conteudo = document.querySelector('div');
        let newDiv = document.createElement("div");
        newDiv.classList.add('content');
        newDiv.classList.add('number_show');
        conteudo.appendChild(newDiv);
        let newH2 = document.createElement("h2");
        newH2.classList.add('title_num');
        newH2.innerText = randomNumbers[0];
        var cont_Newh2 = newH2.textContent;
        cont_Newh2 = parseInt(cont_Newh2)

        newDiv.appendChild(newH2);
        randomNumbers.shift();
        newRandomNumbers.push(cont_Newh2);

        console.log(newRandomNumbers);
    }
}

const input = document.querySelector('input');
const numTitle = document.querySelector('#number');
const conteudo = document.querySelector('div');

function soltou(e) {
    if (e.key === 'Enter') {


        //enviando o evento para a lista
        let newDiv = document.createElement("div");
        newDiv.classList.add('content');
        newDiv.classList.add('number_show');
        newDiv.classList.add('correct');
        conteudo.appendChild(newDiv);

        //pegando o valor inserido no input
        let newH2 = document.createElement("h2");
        newH2.classList.add('title_num');
        newH2.classList.add('result_inp')
        newH2.innerText = input.value;
        var lastDivH2 = newH2.textContent;
        lastDivH2 = parseInt(lastDivH2);
        let ok = newRandomNumbers.includes(lastDivH2)

        newRandomNumbers.push(lastDivH2);
        //adicionando o evento ao elemento
        newDiv.appendChild(newH2);
        //limpando o input
        input.value = "";
        //const quest = document.querySelector('#quest_inp')

        if (quest.classList.contains('container_principal')) {
            quest.classList.remove('pergunta');
        } else {
            quest.classList.add('pergunta_hide');
        }

        if (ok) {
            alert("Infelizmente você errou, esse número já tem, tente novamente");
            newDiv.classList.remove('correct');
            newDiv.classList.add('wrongh');
            objeto.reload(forcedReload)
        } else {
            alert("Parabéns, você acertou!");
            objeto.reload(forcedReload)
        }
    }
}
input.addEventListener('keyup', soltou);