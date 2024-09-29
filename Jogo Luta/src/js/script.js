import { Stage } from "./Stage.js";
import { Logger } from "./Logger.js";
import { Knight, BigMonster } from "./characters/index.js";
import { Controller } from "./Controller.js";

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
