export function handleTermsAcceptance() {
    const viewTerms = confirm("Would you like to view the terms and conditions before proceeding?\n(Link: termsAndConditions.html)");

    if (viewTerms) {
        // ✅ Abrir o link logo após o clique do usuário
        window.open('./termsAndConditions.html', '_blank');
    }

    let accept = confirm("Do you agree with the terms and conditions?");
    if (!accept) {
        accept = confirm("You must accept the terms to participate.\nDo you accept now?");
        if (!accept) {
            alert("You must accept the terms to participate.");
            return false;
        }
    }

    return true;
}
