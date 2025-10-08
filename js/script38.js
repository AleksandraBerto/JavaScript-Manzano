let contadora = 1
let soma = 0

do {
    if (contadora % 2 == 0) {
        soma = contadora + soma
    }
    contadora++
} while (contadora <= 500)
console.log("A soma dos valores pares de 1 até 500 é :" + soma)