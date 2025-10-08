let primeiro = true

do {
    valor = parseInt(prompt("Digite um valor positivo (ou negativo para sair) :"))

    if (valor >= 0) { // só processa valores positivos
        if (primeiro) {  // se for o primeiro valor digitado, inicializa maior e meno
            maior = valor
            menor = valor
            primeiro = false //se inicializou
        } else {
            if (valor > maior) { // compara para atualizar maior e menor
                maior = valor
            }
            if (valor < menor) {
                menor = valor
            }
        }
    }
}while (valor >= 0) // repete enquanto valor não for negativo

if(!primeiro){ //! - inverte o valor da lógica
    console.log("Maior valor : " + maior)
    console.log("Menor valor : " + menor)
}else{
    console.log("Nenhum valor positivo foi informado.")
}

