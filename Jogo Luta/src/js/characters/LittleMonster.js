import { Character } from "./Character.js";

export class LittleMonster extends Character {
    constructor() {
        super("Little Monster");
        this.life = 60;
        this.attack = 5;
        this.defense = 4;
        this.maxLife = this.life;
        this.alive = this.alive;
    }
}
