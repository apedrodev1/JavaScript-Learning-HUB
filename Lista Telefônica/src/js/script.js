const contacts = {};

while (true) {
    let resposta = prompt("Olá, deseja cadastrar seu contato? (0 - Não, 1 - Sim)");

    if (resposta === '1') {
        const contactID = Math.random().toString(36).substring(2, 11);

        let firstName = prompt("Por favor, insira seu primeiro nome: ");
        if (!firstName) {
            alert("O primeiro nome é obrigatório!");
            continue;
        }

        let surName = prompt("E qual é o seu sobrenome, " + firstName, "?");

        let phoneNumber;
        while (true) {
            phoneNumber = prompt("Agora, por favor, insira o seu telefone:");
            if (!phoneNumber) {
                alert("O número de telefone é obrigatório!");
            } else if (!phoneNumber.replace(/\s/g, '').match(/^\d{11}$/)) {
                alert("Por favor, insira um número de telefone válido (11 dígitos).");
            } else {
                break;
            }
        }

        let emailAdress;
        while (true) {
            emailAdress = prompt("E o seu e-mail:");
            if (emailAdress && !emailAdress.includes('@')) {
                alert("Por favor, insira um endereço de e-mail válido.");
            } else {
                break;
            }
        }

        let contato = {
            ID: contactID,
            fullName: firstName + " " + surName,
            phoneNumber: phoneNumber,
            emailAdress: emailAdress
        };

        contacts[contactID] = contato;

        alert("Muito obrigado, " + firstName + "! Seu contato foi cadastrado no nosso banco de dados! Seu número de indentificação é: " + contactID);
    } else if (resposta === '0') {
        alert("Cadastro cancelado.");
        break;
    } else {
        alert("Opção inválida. Por favor, digite 0 para Não ou 1 para Sim.");
    }
}

console.log("Contatos cadastrados:", contacts);
