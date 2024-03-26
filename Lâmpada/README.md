# Projeto Lâmpada

Este projeto consiste na criação de uma lâmpada interativa utilizando HTML, CSS e JavaScript. A lâmpada pode ser ligada, desligada e quebrada por meio de botões na interface, além de acender ao passar o mouse sobre ela.

Sendo uma reprodução do mini projeto de uma lâmpada disponível no YouTube, criado pelo canal [Fernando Leonid](https://www.youtube.com/watch?v=4r0zOW9Zn-Y) e disponibilizado no [repositório do GitHub](https://github.com/fernandoleonid/mini-projetos-js/tree/master/01-lamp).

## Descrição

Este projeto consiste em uma página web que simula uma lâmpada interativa. O usuário pode interagir com a lâmpada de três maneiras diferentes:

1. **Ligar:** Clique no botão "Ligar" para acender a lâmpada.
2. **Desligar:** Clique no botão "Desligar" para apagar a lâmpada.
3. **Quebrar:** Dê um duplo clique na lâmpada para quebrá-la.

Ao passar o mouse sobre a lâmpada, ela se acende, proporcionando uma experiência interativa ao usuário. Além disso, as transições suaves entre as imagens da lâmpada e os botões estilizados conforme as boas práticas de IHC tornam a experiência mais agradável e intuitiva.

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

projeto-lampada/
│
├── src/
│ ├── css/
│ │ └── style.css
│ │
│ ├── js/
│ │ └── script.js
│ │
│ └── media/
│ └── img/
│ ├── desligada.jpg
│ ├── ligada.jpg
│ └── quebrada.jpg
│
├── index.html
│
└── README.md

## JavaScript Otimizado

O código JavaScript foi otimizado para reduzir a repetição de código e simplificar as funções. Veja abaixo as alterações realizadas:

<code>const lamp = document.getElementById("lamp");

function isLampBroken() {
return lamp.src.includes('quebrada');
}

function lampOn() {
if (!isLampBroken()) {
lamp.src = './src/media/img/ligada.jpg';
}
}

function lampOff() {
if (!isLampBroken()) {
lamp.src = './src/media/img/desligada.jpg';
}
}

function lampBroken() {
lamp.src = "./src/media/img/quebrada.jpg";
}

document.querySelectorAll('.btn button').forEach(button => {
button.addEventListener('click', () => {
switch (button.id) {
case 'turnOn':
lampOn();
break;
case 'turnOff':
lampOff();
break;
case 'restartBtn':
lampBroken();
break;
default:
break;
}
});
});

lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("dblclick", lampBroken);</code>

Depois:

<code>const lamp = document.getElementById("lamp");

function isLampBroken() {
return lamp.src.includes('quebrada');
}

function lampOn() {
if (!isLampBroken()) {
lamp.src = './src/media/img/ligada.jpg';
}
}

function lampOff() {
if (!isLampBroken()) {
lamp.src = './src/media/img/desligada.jpg';
}
}

function lampBroken() {
lamp.src = "./src/media/img/quebrada.jpg";
}

document.querySelectorAll('.btn button').forEach(button => {
button.addEventListener('click', () => {
switch (button.id) {
case 'turnOn':
lampOn();
break;
case 'turnOff':
lampOff();
break;
case 'restartBtn':
lampBroken();
break;
default:
break;
}
});
});

lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("dblclick", lampBroken);
</code>

Nesta versão, as funções lampOn, lampOff e lampBroken foram otimizadas e a interação com os botões foi simplificada usando o método querySelectorAll.

---

Esse README fornece uma descrição clara do projeto, seus objetivos, tecnologias utilizadas e como utilizá-lo, juntamente com os devidos créditos ao criador original do projeto.
