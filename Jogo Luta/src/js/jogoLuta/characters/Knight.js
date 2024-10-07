import { Character } from "./Character.js";

export class Knight extends Character {
    constructor(name) {
        super(name);
        this.life = 100;
        this.attack = 10;
        this.accuracy = 8;
        this.defense = 8;
        this.speed = 9;
        this.maxLife = this.life;
        this.alive = this.alive;
    }
}