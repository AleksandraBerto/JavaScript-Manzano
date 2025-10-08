for(let i = 1; i <= 5; i++){
    let numero = parseInt(prompt("Digite um valor :"))

    if (i == 1){
        maior = numero
        menor = numero
    }else{
        if(numero > maior){
            maior = numero
        }
        if (numero < menor){
            menor = numero
        }
    } 
}alert("Maior valor : " + maior + "\n" + "Menor valor : " + menor)