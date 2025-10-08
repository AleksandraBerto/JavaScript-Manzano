let contadora = 1
let soma = 0

while (contadora < 501)
    if (contadora % 2 == 0){
        soma = soma + contadora
    }
    contadora = contadora + 1
    document.getElementById('demo').innerHTML = soma