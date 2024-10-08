import { Character } from "../Individual figures/Character.js";

export class Orc extends Character {
    constructor(name) {
        super(name);
        this.life = 135;
        this.attack = 9;
        this.accuracy = 11
        this.defense = 13;
        this.speed = 8;
        this.maxLife = this.life;
        this.alive = this.alive;
    }
}