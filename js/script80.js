let valor = parseFloat(prompt("Digite o valor da prestação :"))
let taxa = parseFloat(prompt("Digite o valor da taxa (em %) :"))
let tempo = parseFloat(prompt("Digite o tempo de atraso (meses):"))

prestacao = valor + (valor * taxa/100) * tempo

alert("O valor final da prestação a ser pago é : R$" + prestacao)