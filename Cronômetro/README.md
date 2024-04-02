# Cronômetro em JavaScript

Um cronômetro simples com três casas decimais, desenvolvido em HTML, CSS e JavaScript. Oferece funcionalidades básicas como iniciar, pausar, continuar e reiniciar a contagem do tempo, proporcionando uma medição precisa de intervalos temporais.

## Descrição:

Este projeto consiste em um cronômetro desenvolvido utilizando HTML, CSS e JavaScript. O cronômetro apresenta precisão de até três casas decimais e oferece funcionalidades como iniciar, pausar, continuar e reiniciar a contagem do tempo. É uma aplicação simples e útil para medir intervalos de tempo com precisão.

Sendo uma reprodução do mini projeto de um cronômetro disponível no YouTube, criado pelo canal [Matheus Battisti - Hora de Codar](https://www.youtube.com/watch?v=SbST27OWpmo) e disponibilizado no [repositório do GitHub](https://github.com/matheusbattisti/cronometro_js).

![image](https://github.com/apedrodev1/JavaScript-Learning-HUB/assets/104085801/0b0f56f3-293a-4efb-99f9-4cc9ebbedec7)

## Como Utilizar:

1. Clone este repositório em seu ambiente local.
2. Abra o arquivo `index.html` em seu navegador web.
3. Experimente interagir com os botões para ligar, desligar e quebrar a lâmpada.

## Funcionalidades:

- Iniciar: Começa a contagem do tempo.

![image](https://github.com/apedrodev1/JavaScript-Learning-HUB/assets/104085801/e4447942-3e11-4a21-8913-f29ddf96ab52)

- Função startTimer em script.js:

<code>function startTimer() {
interval = setInterval(() => {
if (!isPaused) {
miliseconds += 10;
if (miliseconds === 1000) {
seconds++;
miliseconds = 0;
}
if (seconds === 60) {
minutes++;
seconds = 0;
minutesEl.textContent = formatTime(minutes);
secondsEl.textContent = formatTime(seconds);
milisecondsEl.textContent = (miliseconds);
}
}, 10);
startBtn.style.display = "none"
pauseBtn.style.display = "inline-block"}<code>

- Pausar: Pausa a contagem do tempo.

![image](https://github.com/apedrodev1/JavaScript-Learning-HUB/assets/104085801/37046202-9a62-464f-ab76-863d7c1728d3)

- Função pauseTimer em script.js:

<code>function pauseTimer() {
isPaused = true
pauseBtn.style.display = "none";
resumeBtn.style.display = "block";
}<code>

- Continuar: Continua a contagem do tempo após pausar.

![image](https://github.com/apedrodev1/JavaScript-Learning-HUB/assets/104085801/2c2a945a-3b92-4a21-93d1-65cb0ff06026)

- Função resumeTimer em script.js:

<code>function resumeTimer() {
isPaused = false;
pauseBtn.style.display = "block";
resumeBtn.style.display = "nome";
}<code>

- Reiniciar: Zera o tempo e permite iniciar novamente.

![image](https://github.com/apedrodev1/JavaScript-Learning-HUB/assets/104085801/278bb387-cbfd-4a50-a697-6f848e3c93a5)

- Função restartTimer em script.js:

<code>function restartTimer() {
clearInterval(interval);
minutes = 0;
seconds = 0;
miliseconds = 0;
minutesEl.textContent = "00";
secondsEl.textContent = "00";
milisecondsEl.textContent = "000";
startBtn.style.display = "block";
pauseBtn.style.display = "none";
resumeBtn.style.display = "none";
}<code>

## Tecnologias Utilizadas:

- HTML
- CSS
- JavaScript

## Estruturação de Pastas:

A estrutura de pastas foi organizada da seguinte maneira:

![image](https://github.com/apedrodev1/JavaScript-Learning-HUB/assets/104085801/eab7fad5-d780-479d-8b98-faf22fd3923a)

---

Esse README fornece uma descrição clara do projeto, seus objetivos, tecnologias utilizadas e como utilizá-lo, juntamente com os devidos créditos ao criador original do projeto.

---
