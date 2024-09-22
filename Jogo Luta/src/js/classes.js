class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El, logObject, controllers) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
        this.log = logObject;
        this.isGameOver = false;
        this.controllers = controllers;
    }

    start() {
        this.update();
        this.controlTurns();
        this.controllers.initialize(this);
    }

    controlTurns() {     //quase finalizada - apenas retirar scale do botao attack de quem espera -- .style.transform = 'scale(1)'
        const fighter1AttackButton = this.controllers.fighter1AttackButton;
        const fighter2AttackButton = this.controllers.fighter2AttackButton;
        const healer1Button = this.controllers.healer1Button;
        const healer2Button = this.controllers.healer2Button;

        // Desativando os botões de ataque e cura inicialmente
        fighter1AttackButton.disabled = true;
        fighter2AttackButton.disabled = true;
        healer1Button.disabled = true;
        healer2Button.disabled = true;

        // Lógica do cara ou coroa 
        let coinFlip = Math.random() < 0.5; // True = P1 começa, False = P2 começa
        let starter = coinFlip ? fighter1AttackButton : fighter2AttackButton;
        let starterHealer = coinFlip ? healer1Button : healer2Button;
        let message = coinFlip ? 'P1 é cara, P1 começa!' : 'P2 é coroa, P2 começa!';

        this.log.addMessage(message);

        // Delay de 2 segundos antes de liberar os botões
        setTimeout(() => {
            starter.disabled = false;
            starterHealer.disabled = false;
        }, 2000);

        // Configuração dos turnos
        fighter1AttackButton.addEventListener('click', () => {
            fighter1AttackButton.disabled = true;
            fighter2AttackButton.disabled = false;
            healer1Button.disabled = true; // Desabilita o botão de cura após atacar
            healer2Button.disabled = false; // Permite que o segundo jogador cure

            // Ativa o cursor do próximo jogador
            fighter2AttackButton.style.cursor = 'pointer';
            fighter1AttackButton.style.cursor = 'not-allowed'; // Desativa o cursor do jogador 1
        });

        fighter2AttackButton.addEventListener('click', () => {
            fighter2AttackButton.disabled = true;
            fighter1AttackButton.disabled = false;
            healer2Button.disabled = true;
            healer1Button.disabled = false;

            fighter1AttackButton.style.cursor = 'pointer';
            fighter2AttackButton.style.cursor = 'not-allowed';
        });

        healer1Button.addEventListener('click', () => {
            this.doHeal(fighter1); // Chama a função de cura
            fighter2AttackButton.disabled = false; // Permite que o segundo jogador ataque

            // Desativa o cursor do jogador 1 após curar
            fighter1AttackButton.style.cursor = 'not-allowed';
            healer2Button.disabled = false; // Permite que o segundo jogador cure
        });

        healer2Button.addEventListener('click', () => {
            this.doHeal(fighter2);
            fighter1AttackButton.disabled = false;


            fighter2AttackButton.style.cursor = 'not-allowed';
            healer1Button.disabled = false;
        });
    }

    update() {
        // Fighter 1
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(2)} HP`;
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector('.bar').style.width = `${f1Pct.toFixed(2)}%`;

        // Fighter 2
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(2)} HP`;
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector('.bar').style.width = `${f2Pct.toFixed(2)}%`;
    }

    doAttack(attacking, attacked) { //adicionar a condicao dodge actualAttack = (attack + acurracy * (attackFactor)) = actualDefense = (defense + speed *(defenseFactor))
        if (attacking.life <= 0 || attacked.life <= 0) { // Condição de vitória ou derrota
            return;
        }

        let attackFactor = parseFloat((Math.random() * 2).toFixed(2));
        let defenseFactor = parseFloat((Math.random() * 2).toFixed(2));

        let actualAttack = attacking.attack * attackFactor;
        let actualDefense = attacked.defense * defenseFactor;

        if (actualAttack > actualDefense) {
            attacked.life -= actualAttack;
            this.log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`);
        } else {
            this.log.addMessage(`${attacked.name} defendeu o ataque`);
        }

        // Verificação do fim da luta
        if (attacked.life <= 0) {
            this.log.addMessage(`${attacked.name} foi derrotado!`);
            this.endFight(attacking.name);
            return;
        }

        this.update();
    }

    doHeal(fighter) { //funcao heal nao obedece a logica de uma jogada por vez / porem funciona (ajustar no futuro, talvez) / as verificacoes de vida cheia e uso 4 vezes quebrariam o controlTurns()
        // Verifica se a vida do fighter está cheia
        if (fighter.life >= fighter.maxLife) {
            this.log.addMessage(`${fighter.name} está com a vida cheia e não pode se curar!`);
            return;
        }

        // Verifica se ainda há curas disponíveis
        if (fighter.healingTimes > 0) {
            let healAmount = Math.floor(Math.random() * 10) + 5; // Cura entre 5 e 15
            fighter.life = Math.min(fighter.maxLife, fighter.life + healAmount); // Cura, mas não ultrapassa a vida máxima

            this.log.addMessage(`${fighter.name} curou ${healAmount} de HP. Restam ${fighter.healingTimes - 1} curas.`);
            this.update(); // Atualiza a barra de vida

            fighter.healingTimes--;

            //manipular o elemento DOM .healChances settar coracoes - implementar
            const healCountElement = fighter === this.fighter1 ? this.fighter1El.querySelector('.healCount') : this.fighter2El.querySelector('.healCount');
            healCountElement.innerText = fighter.healingTimes;

            // Desabilita o botão de cura se não houver mais curas disponíveis
            if (fighter.healingTimes === 0) {
                if (fighter === this.fighter1) {
                    this.controllers.healer1Button.disabled = true; // Desabilita o botão de cura do jogador 1
                    this.controllers.healer1Button.style.cursor = 'not-allowed'; // Desativa o cursor
                    this.controllers.healer1Button.style.transform = 'scale(1)';
                    this.controllers.healer1Button.style.backgroundColor = '#a6e3e3';
                    // this.controllers.healer1.style.boxShadow = ''; tentar tirar o box-shadow
                } else {
                    this.controllers.healer2Button.disabled = true;
                    this.controllers.healer2Button.style.cursor = 'not-allowed';
                    this.controllers.healer2Button.style.transform = 'scale(1)';
                    this.controllers.healer2Button.style.backgroundColor = '#a6e3e3';
                    // this.controllers.healer2Button.boxShadow = '';

                }

                // if (this.shouldGiveExtraHeal()) {  // chama funcao para conceder mais alguns usos do botao heal durante a luta / implementar mais tarde
                //     this.giveExtraHeal(fighter, 1);  // Concede 1 uso extra
                // }

                this.log.addMessage(`${fighter.name} não pode mais curar.`);
            }
        } else {
            this.log.addMessage(`${fighter.name} não pode mais curar!`);
        }
    }

    endFight(winnerName) {
        this.log.addMessage(`${winnerName} venceu a luta!`);
        this.fighter1El.querySelector('.attackButton').disabled = true;
        this.fighter2El.querySelector('.attackButton').disabled = true;

        this.fighter1El.querySelector('.healButton').disabled = true;
        this.fighter2El.querySelector('.healButton').disabled = true;
    }
}

class Log {
    list = [];

    constructor(listEl) {
        this.listEl = listEl;
    }

    addMessage(msg) {
        this.list.push(msg);
        let li = document.createElement('li');
        li.innerText = msg;
        this.listEl.appendChild(li); // Adiciona o <li> à lista
    }
}




// updateLifeBar(fighter) {
//     const lifeBarElement = fighter === this.fighter1 ? this.fighter1El : this.fighter2El;
//     const lifeBar = lifeBarElement.querySelector('.bar');
//     const lifeText = lifeBarElement.querySelector('.lifeText');
//     const lifePercentage = (fighter.life / fighter.maxLife) * 100;

//     lifeBar.style.width = `${lifePercentage}%`;

//     // Muda a cor da barra com base na vida
//     if (lifePercentage > 50) {
//         lifeBar.style.backgroundColor = 'green';
//     } else if (lifePercentage > 25) {
//         lifeBar.style.backgroundColor = 'yellow';
//     } else {
//         lifeBar.style.backgroundColor = 'red';
//     }

//     lifeText.textContent = `${fighter.life} / ${fighter.maxLife}`; // Atualiza o texto
// }