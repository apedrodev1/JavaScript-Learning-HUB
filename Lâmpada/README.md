# Projeto Lâmpada

Este projeto consiste na criação de uma lâmpada interativa em um plano de fundo que é coerente a ideia. Utilizando HTML, CSS e JavaScript. A lâmpada pode ser ligada, desligada e quebrada por meio de botões estilizados na interface, além de acender ao passar o mouse sobre ela.

</br>
Sendo uma reprodução do mini projeto de uma lâmpada disponível no YouTube, criado pelo canal [Fernando Leonid](https://www.youtube.com/watch?v=4r0zOW9Zn-Y) e disponibilizado no [repositório do GitHub](https://github.com/fernandoleonid/mini-projetos-js/tree/master/01-lamp).

## Descrição

Este projeto consiste em uma página web que simula uma lâmpada interativa. O usuário pode interagir com a lâmpada de três maneiras diferentes:
</br>

 1. **Ligar:** Clique no botão "Ligar" para acender a lâmpada.
 2. **Desligar:** Clique no botão "Desligar" para apagar a lâmpada.
 3. **Quebrar:** Dê um duplo clique na lâmpada para quebrá-la.
</br>
Ao passar o mouse sobre a lâmpada, ela se acende, proporcionando uma experiência interativa ao usuário. Além disso, as transições suaves entre as imagens da lâmpada e os botões estilizados conforme as boas práticas de IHC tornam a experiência mais agradável e intuitiva.

# Acesa: 

![image](https://github.com/apedrodev1/JavaScript-Learning-HUB/assets/104085801/7e636054-8fd7-4390-82aa-11e14d850ad9)


- Função lampOn em script.js: 

<code>function lampOn() {
    if (!isLampBroken()) {
        lamp.src = './src/media/img/ligada.jpg';
    }
}</code>


# Apagada: 

![image](https://github.com/apedrodev1/JavaScript-Learning-HUB/assets/104085801/fad5bf6d-bdaa-4ca0-ad1f-386c8df1b420)


- Função lampOff em script.js:

<code>function lampOff() {
    if (!isLampBroken()) {
        lamp.src = './src/media/img/desligada.jpg';
    }
}</code>


# Quebrada:

![image](https://github.com/apedrodev1/JavaScript-Learning-HUB/assets/104085801/6ad9dfe0-a349-42e4-b84d-b50c60a4e767)

- Função lampBroken em script.js:

<code>function lampBroken() {
    lamp.src = "./src/media/img/quebrada.jpg";
    buttons.forEach(button => {
        button.disabled = true;
        button.style.cursor = 'not-allowed';
        button.style.opacity = '0.5';
        button.style.pointerEvents = 'none';
    });
    setTimeout(() => {
        alert("You broke Einstein, dude 😢! Please refresh the page.");
    }, 100);
}</code>


## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript

## Como Utilizar

1. Clone este repositório em seu ambiente local.
2. Abra o arquivo `index.html` em seu navegador web.
3. Experimente interagir com os botões para ligar, desligar e quebrar a lâmpada.

## Estruturação de Pastas

A estrutura de pastas foi organizada da seguinte maneira:

![image](https://github.com/apedrodev1/JavaScript-Learning-HUB/assets/104085801/9a804a65-5732-4e52-ac8c-b71288cbb34f)

---


Esse README fornece uma descrição clara do projeto, seus objetivos, tecnologias utilizadas e como utilizá-lo, juntamente com os devidos créditos ao criador original do projeto.
