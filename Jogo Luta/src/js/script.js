import { Stage } from "./jogoLuta/Stage.js";
import { Logger } from "./jogoLuta/Logger.js";
import { Knight, BigMonster } from "./jogoLuta/characters/index.js";
import { Controller } from "./jogoLuta/Controller.js";

let fighter1El = document.querySelector("#char");
let fighter2El = document.querySelector("#monster");

let log = new Logger(document.querySelector(".log"));
let char = new Knight("Sir Pedro");
let monster = new BigMonster();

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
