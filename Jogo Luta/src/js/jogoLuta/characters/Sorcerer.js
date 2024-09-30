import { Character } from "./Character.js";

export class Sorcerer extends Character {
    constructor(name) {
        super(name);
        this.life = 80;
        this.attack = 15;
        this.defense = 3;
        this.maxLife = this.life;
        this.alive = this.alive;
    }
}
