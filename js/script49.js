contadora = 1
soma = 0

do{
    let valor = parseInt(prompt("Digite o valor " + contadora + ": "))
    let fatorial = 1
    while(valor > 1){ // Enquanto o valor for > 1, continua multiplicando
        fatorial = fatorial * valor// Multiplica o fatorial pelo valor atual
        valor-- // Valor -1
    }
    soma = soma + fatorial // Soma o fatorial calculado com o total acumulado
    contadora++ //Contadora +1
}while (contadora <= 15) // Repete até ler 15 valores
    console.log("O resultado da soma é : " + soma)