let contador = 1;
let numero = parseInt(prompt("Digite um número maior que zero:"));
let resultadoTabuada = "";

// O loop deve continuar enquanto o contador for menor ou igual a 10
while (contador <= 10) {
  // Concatena cada linha da tabuada em uma única string
  resultadoTabuada += numero + " x " + contador + " = " + (numero * contador) + "<br>";

  // Incrementa o contador para a próxima linha
  contador = contador + 1;
}

// Exibe a string completa da tabuada no parágrafo com o id "tabuada"
document.getElementById("tabuada").innerHTML = resultadoTabuada;