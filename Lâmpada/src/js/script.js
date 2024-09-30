document.addEventListener("DOMContentLoaded", function () {
const lamp = document.getElementsByClassName("lamp")[0];
const buttons = document.querySelectorAll('.btn');

const isLampBroken = () => lamp.src.includes('quebrada');
const lampOn = () => !isLampBroken() ? lamp.src = './src/media/img/ligada.jpg' : null;
const lampOff = () => !isLampBroken() ? lamp.src = './src/media/img/desligada.jpg' : null;

function lampBroken() {
    lamp.src = "./src/media/img/quebrada.jpg";
    buttons.forEach(button => {
        button.disabled = true;
        button.style.cursor = 'not-allowed';
        button.style.opacity = '0.5';
        button.style.pointerEvents = 'none';
    });

    setTimeout(() => {
        // console.error("You broke Einstein, dude 😢! Please refresh the page."); tentar passar como erro, para que o usuario tenha o acesso mais facil do botao refresh
        alert("You broke Einstein, dude 😢! Please refresh the page.");
    }, 100);
}

document.querySelectorAll('.btn button').forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('turnOn')) {
            lampOn();
        } else if (button.classList.contains('turnOff')) {
            lampOff();
        } else if (button.classList.contains('restartBtn')) {
            lampBroken();
        }
    });
});

lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("dblclick", lampBroken);
    
}
