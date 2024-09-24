export class Character {

    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;
    alive = true; // nao esta sendo usada, verificar necessidade depois variavel que verifica se o personagem esta ou nao vivo

    constructor(name) {
        this.name = name;
        this.healingTimes = 4;
    }

    get life() {
        return this._life;
    }
    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife;
    }
}

export class Knight extends Character {
    constructor(name) {
        super(name);
        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this.life;
        this.alive = this.alive;
    }
}

export class Sorcerer extends Character {
    constructor(name) {
        super(name);
        this.life = 80;
        this.attack = 15;
        this.defense = 3;
        this.maxLife = this.life;
        this.alive = this.alive;
    }
}

export class LittleMonster extends Character {
    constructor() {
        super('Little Monster');
        this.life = 60;
        this.attack = 5;
        this.defense = 4;
        this.maxLife = this.life
        this.alive = this.alive;
    }
}

export class BigMonster extends Character {
    constructor() {
        super('Big Monster');
        this.life = 120;
        this.attack = 16;
        this.defense = 5;
        this.maxLife = this.life
        this.alive = this.alive;
    }
};

