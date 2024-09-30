import { Character } from "./Character.js";

export class BigMonster extends Character {
    constructor() {
        super("Big Monster");
        this.life = 120;
        this.attack = 16;
        this.defense = 5;
        this.maxLife = this.life;
        this.alive = this.alive;
    }
}
