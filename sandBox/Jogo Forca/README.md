
Mobile first
# Jogo da Forca

Este projeto é um clássico jogo da Forca implementado usando HTML, CSS, JavaScript e Bootstrap. O jogo permite que os jogadores adivinhem uma palavra oculta sugerindo letras dentro de um certo número de tentativas. Ele apresenta uma interface amigável estilizada com Bootstrap, design responsivo para vários dispositivos e elementos interativos impulsionados por JavaScript. Os jogadores recebem feedback sobre as tentativas corretas e incorretas, e o jogo exibe a palavra e uma mensagem de vitória ou derrota no final. Este projeto visa proporcionar uma maneira divertida e envolvente de praticar habilidades de codificação e aprender os fundamentos do desenvolvimento web
</br>

Sendo uma reprodução de um jogo infantil, disponível no YouTube, criado pelo canal [Agnaldo Guimarães](https://www.youtube.com/watch?v=OvxbtRLUgXY&list=PLUPt90PJkVdU5kHy_QHmJi0MY_Zgw7CJV) e disponibilizado no [repositório do GitHub](https://github.com/agnaldoguima/jogoDaForca).

## Descrição

Este projeto consiste em uma página web que simula uma lâmpada interativa. O usuário pode interagir com a lâmpada de três maneiras diferentes:
</br>

 1. **Ligar:** Clique no botão "Ligar" para acender a lâmpada.
 2. **Desligar:** Clique no botão "Desligar" para apagar a lâmpada.
 3. **Quebrar:** Dê um duplo clique na lâmpada para quebrá-la.

</br>

Ao passar o mouse sobre a lâmpada, ela se acende, proporcionando uma experiência interativa ao usuário. Além disso, as transições suaves entre as imagens da lâmpada e os botões estilizados conforme as boas práticas de IHC tornam a experiência mais agradável e intuitiva, assim como o plano de fundo.

</br>

# Acesa: 

![image](https://github.com/apedrodev1/JavaScript-Learning-HUB/assets/104085801/7e636054-8fd7-4390-82aa-11e14d850ad9)


- Função lampOn em script.js: 

<code>const lampOn = () => !isLampBroken() ? lamp.src = './src/media/img/ligada.jpg' : null;</code>

</br>

# Apagada: 

![image](https://github.com/apedrodev1/JavaScript-Learning-HUB/assets/104085801/fad5bf6d-bdaa-4ca0-ad1f-386c8df1b420)


- Função lampOff em script.js:

<code>const lampOff = () => !isLampBroken() ? lamp.src = './src/media/img/desligada.jpg' : null;</code>

</br>

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

</br>
</br>
<div style="text-align:center;"

![image](https://github.com/apedrodev1/JavaScript-Learning-HUB/assets/104085801/357c7f7c-6aef-479e-808f-31d64eea7f0d)

></div>


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