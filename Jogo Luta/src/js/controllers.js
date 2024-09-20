class Controler {
    constructor(fighter1El, fighter2El, healButton1El, healButton2El, stage, log) {
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
        this.healButton1El = healButton1El;
        this.healButton2El = healButton2El;
        this.stage = stage;
        this.log = log;

        this.fighter1AttackButton = this.fighter1El.querySelector('.attackButton');
        this.fighter2AttackButton = this.fighter2El.querySelector('.attackButton');

        this.healer1Button = this.healButton1El.querySelector('.healButton');
        this.healer2Button = this.healButton2El.querySelector('.healButton');
    }

    intialize() {
        this.fighter1AttackButton.addEventListener('click', () => this.stage.doAttack(this.stage.fighter1, this.stage.fighter2));
        this.fighter2AttackButton.addEventListener('click', () => this.stage.doAttack(this.stage.fighter2, this.stage.fighter1));

        this.healer1Button.addEventListener('click', () => this.stage.doHeal(this.stage.fighter1));
        this.healer2Button.addEventListener('click', () => this.stage.doHeal(this.stage.fighter2));
    }

    controlTurns() {

        this.fighter1AttackButton.disabled = true;
        this.fighter2AttackButton.disabled = true;

        let coinFlip = Math.random() < 0.5; // True = P1 começa, False = P2 começa
        let starter = coinFlip ? this.fighter1AttackButton : this.fighter2AttackButton;
        let message = coinFlip ? 'P1 é cara, P1 começa!' : 'P2 é coroa, P2 começa!';

        // Adiciona mensagem ao log
        this.log.addMessage(message);

        // Delay antes de ativar o botão de ataque do jogador que começa
        setTimeout(() => {
            starter.disabled = false;
        }, 2000); // Delay de 2 segundos

        // Alterna turnos após cada clique
        this.fighter1AttackButton.addEventListener('click', () => {
            this.fighter1AttackButton.disabled = true;
            this.fighter2AttackButton.disabled = false;
        });

        this.fighter2AttackButton.addEventListener('click', () => {
            this.fighter2AttackButton.disabled = true;
            this.fighter1AttackButton.disabled = false;
        });
    }
}