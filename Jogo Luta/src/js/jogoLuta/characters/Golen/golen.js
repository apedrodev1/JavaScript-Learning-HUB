import { Character } from "../Character.js";

export class LittleMonster extends Character {
    constructor() {
        super("Little Monster");
        this.life = 110;
        this.attack = 15;
        this.accuracy = 8;
        this.defense = 6;
        this.speed = 12;
        this.maxLife = this.life;
        this.alive = this.alive;
    }
}
