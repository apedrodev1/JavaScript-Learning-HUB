export class Controler {
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

        // Configuração dos turnos
        this.fighter1AttackButton.addEventListener('click', () => {
            this.fighter1AttackButton.disabled = true;
            this.fighter2AttackButton.disabled = false;
            this.healer1Button.disabled = true; // Desabilita o botão de cura após atacar
            this.healer2Button.disabled = false; // Permite que o segundo jogador cure

            // Ativa o cursor do próximo jogador
            this.fighter2AttackButton.style.cursor = 'pointer';
            this.fighter1AttackButton.style.cursor = 'not-allowed'; // Desativa o cursor do jogador 1
        });

        this.fighter2AttackButton.addEventListener('click', () => {
            this.fighter2AttackButton.disabled = true;
            this.fighter1AttackButton.disabled = false;
            this.healer2Button.disabled = true;
            this.healer1Button.disabled = false;

            this.fighter1AttackButton.style.cursor = 'pointer';
            this.fighter2AttackButton.style.cursor = 'not-allowed';
        });

        this.healer1Button.addEventListener('click', () => {
            this.fighter1AttackButton.disabled = true;
            this.healer1Button.disabled = true;

            this.fighter2AttackButton.disabled = false; // Permite que o segundo jogador ataque
            this.healer2Button.disabled = false; // Permite que o segundo jogador cure

            // Desativa o cursor do jogador 1 após curar
            this.fighter1AttackButton.style.cursor = 'not-allowed';
            this.fighter2AttackButton.style.cursor = 'pointer';
        });

        this.healer2Button.addEventListener('click', () => {
            this.fighter1AttackButton.disabled = false;
            this.healer1Button.disabled = false;

            this.fighter2AttackButton.disabled = true; // Permite que o segundo jogador ataque
            this.healer2Button.disabled = true; // Permite que o segundo jogador cure

            this.fighter1AttackButton.style.cursor = "pointer"
            this.fighter2AttackButton.style.cursor = 'not-allowed';
        });
    }
}