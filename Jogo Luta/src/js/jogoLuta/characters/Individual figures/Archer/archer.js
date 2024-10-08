import { Character } from "../Individual figures/Character.js";

export class Sorcerer extends Character {
    constructor(name) {
        super(name);
        this.life = 100;
        this.attack = 14;
        this.accuracy = 9
        this.defense = 6;
        this.speed = 10;
        this.maxLife = this.life;
        this.alive = this.alive;
    }
}