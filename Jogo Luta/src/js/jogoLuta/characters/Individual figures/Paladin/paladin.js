import { Character } from "../Individual figures/Character.js";;

export class Paladin extends Character {
    constructor(name) {
        super(name);
        this.life = 150;
        this.attack = 14;
        this.accuracy = 4;
        this.defense = 10;
        this.speed = 7;
        this.maxLife = this.life;
        this.alive = this.alive;
    }
}