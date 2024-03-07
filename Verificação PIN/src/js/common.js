/* Verificação do número PIN (Personal Identification Number) */
var secret = Math.floor(Math.random() * 9999).toString().padStart(4, '0');; // Número aleatório entre 0 e 9999
console.log("Número PIN secreto:", secret);

function checkNumber(pin) {
  pin = parseInt(pin);

  if (pin == secret) {
    alert("PARABÉNS - ACESSO LIBERADO");
  } else {

    var diff = Math.abs(secret - pin);
    var input = secret * 0.1;

    if (pin > secret) {
      if (diff > input) {
        alert("ERRO! O PIN procurado é muito menor do que o valor informado.");
      } else {
        alert("ERRO! O PIN procurado é menor do que o valor informado.");
      }
    } else {
      if (diff > input) {
        alert("ERRO! O PIN procurado é muito maior do que o valor informado.");
      } else {
        alert("ERRO! O PIN procurado é maior do que o valor informado.");
      }
    }
  }
}

function processNumber(e) {
  e.preventDefault();
  var pin = document.getElementById("pin").value;

  if (!/^\d{1,4}$/.test(pin)) {
    alert("ERRO! O número PIN deve ter até 4 dígitos.");
    return;
  }

  checkNumber(pin);
}