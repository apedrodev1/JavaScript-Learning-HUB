import { Character } from "../Character";

export class Sorcerer extends Character {
    constructor(name) {
        super(name);
        this.life = 120;
        this.attack = 16;
        this.accuracy = 7
        this.defense = 6;
        this.speed = 10;
        this.maxLife = this.life;
        this.alive = this.alive;
    }
}
