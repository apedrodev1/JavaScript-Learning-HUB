import { Character } from "../Individual figures/Character.js";

export class Knight extends Character {
    constructor(name) {
        super(name);
        this.life = 130;
        this.attack = 18;
        this.accuracy = 4;
        this.defense = 7;
        this.speed = 8;
        this.maxLife = this.life;
        this.alive = this.alive;
    }
}
