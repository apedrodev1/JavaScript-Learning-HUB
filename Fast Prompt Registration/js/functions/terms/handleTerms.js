export function handleTermsAcceptance() {
    window.open('/termsAndConditions.html', '_blank'); //ver caminho
    let accept = confirm("Do you agree with the terms and conditions?");
    if (!accept) {
        accept = confirm("You must accept the terms to participate. Do you accept now?");
    }
    return accept;
}


// function handleTermsAcceptance() {
//     const viewTerms = confirm("Would you like to view the terms and conditions before proceeding?\n(Link: /termsAndConditions.html)");
//     if (viewTerms) {
//         window.open('./termsAndConditions.html', '_blank');
//     }

//     let accept = confirm("Do you agree with the terms and conditions?");
//     if (!accept) {
//         accept = confirm("You must accept the terms to participate.\nDo you accept now?");
//         if (!accept) {
//             alert("You must accept the terms to participate.");
//             return false;
//         }
//     }
//
//    return true;
//}
