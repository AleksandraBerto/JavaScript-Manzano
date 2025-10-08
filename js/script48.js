let base = parseInt(prompt("Digite o valor da base :"))
let expoente = parseInt(prompt("Digite o valor do expoente :"))

let resultado = 1

    if (expoente == 0) {
        resultado = 1
    }else 
        if (expoente == 1){
            resultado = base
    } else {
        for(let i = 0; i < expoente; i++)
            resultado = resultado * base
    }
    console.log(base + " elevado a " + expoente + " é igual a " + resultado)