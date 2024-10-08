import { Character } from "../Individual figures/Character.js";

export class Dwarf extends Character {
    constructor(name) {
        super(name);
        this.life = 150;
        this.attack = 18;
        this.accuracy = 3;
        this.defense = 6;
        this.speed = 2;
        this.maxLife = this.life;
        this.alive = this.alive;
    }
}