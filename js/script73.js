total = 0

do{
    comodo = prompt("Digite o cômodo :")
    largura = parseFloat(prompt("Digite a largula do cômodo :"))
    comprimento = parseFloat(prompt("Digite o comprimento do cômodo :"))

    area = largura * comprimento
    total = total + area

    console.log("A área do comodo " + comodo + " é: " + area)
    continuar = prompt("Você deseja continuar calculando?(SIM/NAO): ")
} while (continuar != "NAO") //Só sai se for NAO
    console.log("Área total da residência é: " + total)