const lamp = document.getElementsByClassName("lamp")[0]; // Alterado para pegar o primeiro elemento do array retornado

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
