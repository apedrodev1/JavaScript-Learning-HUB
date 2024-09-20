class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El, logObject) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
        this.log = logObject;
        this.isGameOver = false;

    }

    start() {
        this.update();


        //Evento attackButton 
        this.fighter1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));

        this.fighter2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));


        //evento healButton
        this.fighter1El.querySelector('.healButton').addEventListener('click', () => this.doHeal(this.fighter1));

        this.fighter2El.querySelector('.healButton').addEventListener('click', () => this.fighter2);


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

    doAttack(attacking, attacked) {
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
            this.endFight(attacking.name); // Chama a função para terminar a luta
            return; // Finaliza a função se um dos jogadores foi derrotado
        }

        this.update();
    }

    endFight(winnerName) {
        this.log.addMessage(`${winnerName} venceu a luta!`);
        // Desabilitar botões de ataque
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