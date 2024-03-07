const contacts = [];

while (true) {
    let resposta = prompt("Olá, deseja cadastrar seu contato? (0 - Não, 1 - Sim)");

    if (resposta === '1') {
        let firstName = prompt("Por favor, insira seu primeiro nome: ");
        if (!firstName) {
            alert("O primeiro nome é obrigatório!");
            continue;
        }

        let surName = prompt("E qual é o seu sobrenome?");

        let phoneNumber = prompt("Agora, por favor, insira o seu telefone:");
        if (!phoneNumber) {
            alert("O número de telefone é obrigatório!");
            continue;
        }


        if (!phoneNumber.match(/^\d{10}$/)) {
            alert("Por favor, insira um número de telefone válido (10 dígitos).");
            continue;
        }

        let emailAdress = prompt("E o seu e-mail:");


        if (emailAdress && !emailAdress.includes('@')) {
            alert("Por favor, insira um endereço de e-mail válido.");
            continue;
        }

        let contato = {
            fullName: firstName + " " + surName,
            phoneNumber: phoneNumber,
            emailAdress: emailAdress
        };

        contacts.push(contato);

        alert("Muito obrigado, " + firstName + "! Contato cadastrado!");
    } else if (resposta === '0') {
        alert("Cadastro cancelado.");
        break;
    } else {
        alert("Opção inválida. Por favor, digite 0 para Não ou 1 para Sim.");
    }
}

console.log("Contatos cadastrados:", contacts);