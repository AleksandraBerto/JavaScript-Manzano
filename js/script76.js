numero = 1

// Loop for que percorre números de 1 até 9 (menor que 10), incrementando de 2 em 2
for (let numero = 1; numero < 10; numero += 2){ 

    let fatorial = 1 // Reinicia o acumulador do fatorial para cada número

    for (let contadora =1; contadora <= numero; contadora++){
        fatorial = fatorial * contadora // Multiplica o valor atual do fatorial pela contadora 
    }
    console.log("Fatorial de " + numero + " = " + fatorial)
}