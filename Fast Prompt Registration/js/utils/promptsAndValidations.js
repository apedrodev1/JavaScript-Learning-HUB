// Função utilitária que realiza prompt e validação sequencialmente
// Ideal para reaproveitamento em fluxos como main_functionV2

export function promptAndValidate(promptMessage, validationFunction) {
    const input = prompt(promptMessage);
    const validation = validationFunction(input);
    if (!validation.isValid) {
        alert(validation.error);
        return null;
    }
    return validation.value;
}

