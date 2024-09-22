class Controler {
    constructor(fighter1El, fighter2El) {
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;

        this.fighter1AttackButton = this.fighter1El.querySelector('.attackButton');
        this.fighter2AttackButton = this.fighter2El.querySelector('.attackButton');

        this.healer1Button = this.fighter1El.querySelector('.healButton');
        this.healer2Button = this.fighter2El.querySelector('.healButton');
    }

    initialize(stage) {
        this.fighter1AttackButton.addEventListener('click', () => stage.doAttack(stage.fighter1, stage.fighter2));
        this.fighter2AttackButton.addEventListener('click', () => stage.doAttack(stage.fighter2, stage.fighter1));

        this.healer1Button.addEventListener('click', () => stage.doHeal(stage.fighter1));
        this.healer2Button.addEventListener('click', () => stage.doHeal(stage.fighter2));
    }
}