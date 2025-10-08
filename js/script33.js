let contadora = 1
let soma = 0

while (contadora <= 100){
    soma = contadora + soma
    contadora = contadora + 1
}

console.log(soma)
document.getElementById('demo').innerText = soma