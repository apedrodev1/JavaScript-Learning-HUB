import { Stage, Log } from "./classes.js"
import { Knight, BigMonster } from "./characterClass.js"
import { Controler } from "./controllers.js"

let fighter1El = document.querySelector('#char');
let fighter2El = document.querySelector('#monster');

let log = new Log(document.querySelector('.log'));
let char = new Knight('Sir Pedro');
let monster = new BigMonster();

let controllers = new Controler(
    fighter1El,
    fighter2El
);

const stage = new Stage(
    char,
    monster,
    fighter1El,
    fighter2El,
    log,
    controllers
);

stage.start();
