let contadora = 0;
let soma = 0;
let valor;

do {
    valor = parseInt(prompt("Digite um valor positivo (ou negativo para sair): "));

    if (valor >= 0) {
        soma = soma + valor;
        contadora++;
    }

} while (valor >= 0);

if (contadora > 0) {
    console.log("Total da somatória: " + soma);
    console.log("Média aritmética: " + soma / contadora);
    console.log("Total de valores lidos: " + contadora);
} else {
    console.log("Nenhum valor positivo foi informado!");
}