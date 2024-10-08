import { Stage } from "./jogoLuta/Stage.js";
import { Logger } from "./jogoLuta/Logger.js";
import { Knight, BigMonster } from "./jogoLuta/characters/index.js";
import { Controller } from "./jogoLuta/Controller.js";

let fighter1El = document.querySelector("#char"); //p1 alterar no final 
let fighter2El = document.querySelector("#monster"); //p2

let log = new Logger(document.querySelector(".log"));
let char = new Knight("Sir Pedro"); //ta precisando passar o nome, pq nao sei 
let monster = new BigMonster("Monstro"); // se nao passa, fica undefined

let controllers = new Controller(fighter1El, fighter2El);

const stage = new Stage(
    char,
    monster,
    fighter1El,
    fighter2El,
    log,
    controllers
);

stage.start();
