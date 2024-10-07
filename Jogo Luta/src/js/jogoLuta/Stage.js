export class Stage {
    constructor(
        fighter1,
        fighter2,
        fighter1El,
        fighter2El,
        logObject,
        controllers
    ) {
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
        this.updateHearts(this.fighter1El, this.fighter1.healingTimes);
        this.updateHearts(this.fighter2El, this.fighter2.healingTimes);

        //implementar gif da moeda aqui, tentar pegar quem vai ser o starter de controlTurns() e setar o gif correto
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
        //implementar gif da moeda aqui
        let coinFlip = Math.random() < 0.5; // True = P1 começa, False = P2 começa
        let starter = coinFlip ? fighter1AttackButton : fighter2AttackButton;
        let starterHealer = coinFlip ? healer1Button : healer2Button;
        let message = coinFlip
            ? "P1 é cara, P1 começa!"
            : "P2 é coroa, P2 começa!";

        this.log.addMessage(message);

        setTimeout(() => {
            starter.disabled = false;
            starterHealer.disabled = false;
        }, 2000);
    }

    update() {
        // Fighter 1
        this.fighter1El.querySelector(
            ".name"
        ).innerHTML = `${this.fighter1.name}`;
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector(".bar").style.width = `${f1Pct.toFixed(
            2
        )}%`;
        this.updateLifeBar(this.fighter1);

        // Fighter 2
        this.fighter2El.querySelector(
            ".name"
        ).innerHTML = `${this.fighter2.name}`;
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector(".bar").style.width = `${f2Pct.toFixed(
            2
        )}%`;
        this.updateLifeBar(this.fighter2);
    }

    doAttack(attacking, attacked) {
        // Verifica se a luta terminou
        if (attacking.life <= 0 || attacked.life <= 0) {
            return;
        }
    

        let attackFactor = parseFloat((Math.random() * 2).toFixed(2));
        let defenseFactor = parseFloat((Math.random() * 2).toFixed(2));
    
        let actualAttack = (attacking.attack + attacking.accuracy) * attackFactor;
    
        let actualDefense = (attacked.defense + attacked.speed) * defenseFactor;
    

        if (actualAttack > actualDefense) {
            //full ataque
            attacked.life -= actualAttack;
            this.log.addMessage(
                `${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`
            );
        } else if (actualAttack < actualDefense) {
            // defesa
            let reducedDamage = actualAttack * 0.5; // A defesa reduz o dano à metade 
            this.log.addMessage(
                `${attacked.name} defendeu o ataque, mas ainda sofreu ${reducedDamage.toFixed(2)} de dano.`
            );
            // esquiva
        } else {
            this.log.addMessage(`${attacked.name} esquivou do ataque de ${attacking.name}!`);
        }
    
        if (attacked.life <= 0) {
            this.log.addMessage(`${attacked.name} foi derrotado!`);
            this.endFight(attacking.name);
        }
    
        this.update();
    }

    endFight(winnerName) {
        this.log.addMessage(`${winnerName} venceu a luta!`);

        // Talvez abstrait para métodos no Controler
        this.controllers.fighter1AttackButton.disabled = true;
        this.controllers.fighter1AttackButton.style.pointerEvents = "none";

        this.controllers.fighter2AttackButton.disabled = true;
        this.controllers.fighter2AttackButton.style.pointerEvents = "none";

        this.controllers.healer1Button.disabled = true;
        this.controllers.healer1Button.style.pointerEvents = "none";

        this.controllers.healer2Button.disabled = true;
        this.controllers.healer2Button.style.pointerEvents = "none";
    }

    updateLifeBar(fighter) {
        const lifeBarElement =
            fighter === this.fighter1 ? this.fighter1El : this.fighter2El;
        const lifeBar = lifeBarElement.querySelector(".bar");
        const lifeText = lifeBarElement.querySelector(".lifeText");
        const lifePercentage = (fighter.life / fighter.maxLife) * 100;

        lifeBar.style.width = `${lifePercentage}%`;

        if (lifePercentage > 50) {
            lifeBar.style.backgroundColor = "green";
            lifeText.style.color = "white";
        } else if (lifePercentage > 25) {
            lifeBar.style.backgroundColor = "yellow";
            lifeText.style.color = "black";
        } else {
            lifeBar.style.backgroundColor = "red";
            lifeText.style.color = "black";
        }

        lifeText.textContent = `${fighter.life.toFixed(2)} / ${
            fighter.maxLife
        }`;
    }

    updateHearts(el, healingTimes) {
        const heartsContainer = el.querySelector(".healChances");
        heartsContainer.innerHTML = "";

        const heartsImg = Array.from({ length: healingTimes }).map((_) => {
            const img = document.createElement("img");
            img.setAttribute("src", "./src/assets/img/heart.png");
            img.setAttribute("width", "15");
            return img;
        });

        heartsImg.forEach((img) => heartsContainer.appendChild(img));
    }

    // efeito coracoes
    doHeal(fighter) {
        // Verifica se a vida do fighter está cheia
        if (fighter.life <= 0) {
            // Condição de vitória ou derrota
            return;
        }

        if (fighter.life >= fighter.maxLife) {
            this.log.addMessage(
                `${fighter.name} está com a vida cheia e não pode se curar!`
            );
            return;
        }

        // Verifica se ainda há curas disponíveis
        if (fighter.healingTimes > 0) {
            let healAmount = Math.floor(Math.random() * 10) + 5; // Cura entre 5 e 15
            fighter.life = Math.min(fighter.maxLife, fighter.life + healAmount); // Cura, mas não ultrapassa a vida máxima

            this.log.addMessage(
                `${fighter.name} curou ${healAmount} de HP. Restam ${
                    fighter.healingTimes - 1
                } curas.`
            );
            this.update(); // Atualiza a barra de vida

            fighter.healingTimes--;

            // Manipular o elemento DOM .healChances e aplicar animação
            const fighterEl =
                fighter === this.fighter1 ? this.fighter1El : this.fighter2El;

            // Adiciona o efeito de transição para os corações
            this.animateHearts(fighterEl, fighter.healingTimes);

            // Desabilita o botão de cura se não houver mais curas disponíveis
            if (fighter.healingTimes === 0) {
                this.disableHealButton(fighter);
                this.log.addMessage(`${fighter.name} não pode mais curar.`);
            }
        } else {
            this.log.addMessage(`${fighter.name} não pode mais curar!`);
        }
    }

    animateHearts(el, healingTimes) {
        const heartsContainer = el.querySelector(".healChances");

        // Remove corações existentes com efeito de fade
        const currentHearts = heartsContainer.querySelectorAll("img");
        currentHearts.forEach((heart, index) => {
            heart.style.transition = "opacity 0.3s ease";
            heart.style.opacity = "0";

            // Remove o coração após a animação
            setTimeout(() => {
                heart.remove();
            }, 300 * (index + 1)); // Escalonando a remoção para dar tempo de animação
        });

        // Adiciona novos corações
        const heartsImg = Array.from({ length: healingTimes }).map(() => {
            const img = document.createElement("img");
            img.setAttribute("src", "./src/assets/img/heart.png");
            img.setAttribute("width", "15");
            img.style.opacity = "1"; // Garante que os novos corações sejam visíveis
            return img;
        });

        heartsImg.forEach((img) => heartsContainer.appendChild(img));
    }

    disableHealButton(fighter) {
        if (fighter === this.fighter1) {
            this.controllers.healer1Button.disabled = true;
            this.controllers.healer1Button.style.cursor = "not-allowed";
            this.controllers.healer1Button.style.transform = "scale(1)";
            this.controllers.healer1Button.style.backgroundColor = "#a6e3e3";
        } else {
            this.controllers.healer2Button.disabled = true;
            this.controllers.healer2Button.style.cursor = "not-allowed";
            this.controllers.healer2Button.style.transform = "scale(1)";
            this.controllers.healer2Button.style.backgroundColor = "#a6e3e3";
        }
    }
}


// funcao dodge 
 // doAttack(attacking, attacked) {
    //     if (attacking.life <= 0 || attacked.life <= 0) {
    //         // Condição de vitória ou derrota
    //         return;
    //     }

    //     let attackFactor = parseFloat((Math.random() * 2).toFixed(2));
    //     let defenseFactor = parseFloat((Math.random() * 2).toFixed(2));
    //    // let dodgeFactor = parserFloat(Math.random() * 2);    

    //     let actualAttack = (attacking.attack + attacking.accuracy) * attackFactor;
    //     let actualDefense = (attacked.defense + attacking.speed) * defenseFactor;

    //     if (actualAttack > actualDefense) {
    //         attacked.life -= actualAttack;
    //         this.log.addMessage(
    //             `${attacking.name} causou ${actualAttack.toFixed(
    //                 2
    //             )} de dano em ${attacked.name}`
    //         );
    //     } if (actualAttack < actualDefense){

    //     }
    //      else {
    //         this.log.addMessage(`${attacked.name} defendeu o ataque`); //implementar x de dano, memso no ataque reduzido
    //     }

    //     // Verificação do fim da luta
    //     if (attacked.life <= 0) {
    //         this.log.addMessage(`${attacked.name} foi derrotado!`);
    //         this.endFight(attacking.name);
    //     }

    //     this.update();
    // }
