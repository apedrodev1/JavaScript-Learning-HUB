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
