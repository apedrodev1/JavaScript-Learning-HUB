import { Character } from "../Character";

export class Elf extends Character {
    constructor(name) {
        super(name);
        this.life = 115;
        this.attack = 19;
        this.accuracy = 8
        this.defense = 5;
        this.speed = 7;
        this.maxLife = this.life;
        this.alive = this.alive;
    }
}