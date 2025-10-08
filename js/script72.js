numero = 1

do{//Executa enquanto numero for menor que 10
    fatorial = 1 // Reinicia o acumulador do fatorial para cada número
    contadora = 1 // Variável que vai multiplicar de 1 até numero
    do{ 
        fatorial = fatorial * contadora // Multiplica o valor atual do fatorial pela contadora 
        contadora++ // Incrementa a contadora para avançar a multiplicação
    } while (contadora <= numero) // Continua enquanto contadora for menor ou igual a numero
        console.log("Fatorial de " + numero + " = " + fatorial)
        numero+=2 // Avança para o próximo número ímpar
}while (numero < 10) // Repete o bloco externo enquanto numero < 10