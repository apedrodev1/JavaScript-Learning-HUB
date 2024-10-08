import { Character } from "../Individual figures/Character.js";

export class BigMonster extends Character {
    constructor() {
        super("Big Monster");
        this.life = 150;
        this.attack = 14;
        this.accuracy = 3;
        this.defense = 10;
        this.speed = 12;
        this.maxLife = this.life;
        this.alive = this.alive;
    }
}
