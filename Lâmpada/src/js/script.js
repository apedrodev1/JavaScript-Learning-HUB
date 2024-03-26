const lamp = document.getElementById("lamp");

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