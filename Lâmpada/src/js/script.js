const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const lamp = document.getElementById("lamp");


turnOn.addEventListener("click", lampOn);
turnOff.addEventListener("click", lampOff);
lamp.addEventListener("mouseover", lampOn);
// lamp.addEventListener('mouseleave', lampOff); nao funciona, ver mais tarde
lamp.addEventListener("dblclick", lampBroken);



function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = './src/media/img/ligada.jpg';
        //TransitionEvent ver se funciona - deixar mais lento
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = './src/media/img/desligada.jpg';
    }
}

function lampBroken() {
    lamp.src = "./src/media/img/quebrada.jpg"
}