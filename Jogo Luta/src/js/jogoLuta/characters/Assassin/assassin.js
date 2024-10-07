import { Character } from "../Character";

export class Assissin extends Character {
    constructor(name) {
        super(name);
        this.life = 100;
        this.attack = 14;
        this.accuracy = 9;
        this.defense = 4;
        this.speed = 16;
        this.maxLife = this.life;
        this.alive = this.alive;
    }
}