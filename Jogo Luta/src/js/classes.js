export class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El, logObject, controllers) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
        this.log = logObject;
        this.isGameOver = false;
        this.controllers = controllers;
        this.count = 0;
    }

    start() {
        this.update();
        this.controlTurns();
        this.controllers.initialize(this);
        this.updateHearts(this.fighter1El, this.fighter1.healingTimes)
        this.updateHearts(this.fighter2El, this.fighter2.healingTimes)
    }

    controlTurns() {
        const fighter1AttackButton = this.controllers.fighter1AttackButton;
        const fighter2AttackButton = this.controllers.fighter2AttackButton;
        const healer1Button = this.controllers.healer1Button;
        const healer2Button = this.controllers.healer2Button;

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

        setTimeout(() => {
            starter.disabled = false;
            starterHealer.disabled = false;
        }, 2000);
    }

    update() {
        // Fighter 1
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name}`;
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector('.bar').style.width = `${f1Pct.toFixed(2)}%`;
        this.updateLifeBar(this.fighter1)

        // Fighter 2
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name}`;
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector('.bar').style.width = `${f2Pct.toFixed(2)}%`;
        this.updateLifeBar(this.fighter2)


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
        }

        this.update();
    }

    doHeal(fighter) {
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
            const fighterEl = fighter === this.fighter1 ? this.fighter1El : this.fighter2El;
            this.updateHearts(fighterEl, fighter.healingTimes);

            // Desabilita o botão de cura se não houver mais curas disponíveis
            if (fighter.healingTimes === 0) {
                if (fighter === this.fighter1) {
                    this.controllers.healer1Button.disabled = true; // Desabilita o botão de cura do jogador 1
                    this.controllers.healer1Button.style.cursor = 'not-allowed'; // Desativa o cursor
                    this.controllers.healer1Button.style.transform = 'scale(1)';
                    this.controllers.healer1Button.style.backgroundColor = '#a6e3e3';
                } else {
                    this.controllers.healer2Button.disabled = true;
                    this.controllers.healer2Button.style.cursor = 'not-allowed';
                    this.controllers.healer2Button.style.transform = 'scale(1)';
                    this.controllers.healer2Button.style.backgroundColor = '#a6e3e3';
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

    endFight(winnerName) { // nao funciona - rever
        this.log.addMessage(`${winnerName} venceu a luta!`);
        this.fighter1El.querySelector('.attackButton').disabled = true;
        this.fighter2El.querySelector('.attackButton').disabled = true;

        this.fighter1El.querySelector('.healButton').disabled = true;
        this.fighter2El.querySelector('.healButton').disabled = true;
    }

     updateLifeBar(fighter) {
        const lifeBarElement = fighter === this.fighter1 ? this.fighter1El : this.fighter2El;
        const lifeBar = lifeBarElement.querySelector('.bar');
        const lifeText = lifeBarElement.querySelector('.lifeText');
        const lifePercentage = (fighter.life / fighter.maxLife) * 100;
    
        lifeBar.style.width = `${lifePercentage}%`;
    
        if (lifePercentage > 50) {
            lifeBar.style.backgroundColor = 'green';
            lifeText.style.color = 'white'; 
        } else if (lifePercentage > 25) {
            lifeBar.style.backgroundColor = 'yellow';
            lifeText.style.color = 'black'; 
        } else {
            lifeBar.style.backgroundColor = 'red'; 
            lifeText.style.color = 'black'; 
        }
    
        lifeText.textContent = `${fighter.life.toFixed(2)} / ${fighter.maxLife}`; 
    }
    
    updateHearts(el, healingTimes) {

        const heartsContainer = el.querySelector(".healChances");
        heartsContainer.innerHTML = ""

        const heartsImg = Array.from({ length: healingTimes }).map(_ => {
            const img = document.createElement("img");
            img.setAttribute("src", "./src/assets/img/heart.png");
            img.setAttribute("width", "15")
            return img;
        })

        heartsImg.forEach(img => heartsContainer.appendChild(img));
    }
}

export class Log {
    list = [];

    constructor(listEl) {
        this.listEl = listEl;
    }

    addMessage(msg) {
        this.list.push(msg);
        let li = document.createElement('li');
        li.innerText = msg;
        this.listEl.appendChild(li);
        this.listEl.scrollTo(0, this.listEl.scrollHeight)
    }
}




