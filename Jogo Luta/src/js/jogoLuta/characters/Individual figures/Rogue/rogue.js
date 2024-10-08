import { Character } from "../Individual figures/Character.js";;

export class Rogue extends Character {
    constructor(name) {
        super(name);
        this.life = 105;
        this.attack = 16;
        this.accuracy = 7
        this.defense = 8;
        this.speed = 13;
        this.maxLife = this.life;
        this.alive = this.alive;
    }
}