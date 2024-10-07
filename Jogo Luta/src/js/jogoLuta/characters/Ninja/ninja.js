import { Character } from "../Character";

export class Ninja extends Character {
    constructor(name) {
        super(name);
        this.life = 110;
        this.attack = 18;
        this.accuracy = 7
        this.defense = 6;
        this.speed = 11;
        this.maxLife = this.life;
        this.alive = this.alive;
    }
}