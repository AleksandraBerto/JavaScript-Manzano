contadora = 1
multiplicacao = 1
totalGraos = 1

do{
    totalGraos = totalGraos + multiplicacao
    multiplicacao = multiplicacao * 2
    console.log(multiplicacao)
    contadora++
} while (contadora < 65)
    console.log("O total de grãos é : ", totalGraos)