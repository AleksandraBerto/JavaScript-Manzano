contadora = 0
soma = 0

do {
    valor = parseFloat(prompt("Digite um valor positivo (ou um negativo para sair) :"))
    if (valor >= 0) {
        soma = soma + valor
        contadora++
    }
} while (valor >= 0)

if (contadora > 0) { //Verifica se pelo menos um valor positivo foi digitado
    console.log("Total do somatório: " + soma + "\n" + "Media aritmética: " + soma / contadora + "\n" + "Total de valores lidos: " + contadora)
} else {
    console.log("Nenhum valor positivo foi informado.")
}