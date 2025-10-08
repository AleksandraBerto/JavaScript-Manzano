let A = parseFloat(prompt("Digite o valor de A :"))

if (A == 0){
    alert("Não é uma equação de 2° grau")
}else{
    let B = parseFloat(prompt("Digite o valor de B :"))
    let C = parseFloat(prompt("Digite o valor de C :"))

    delta = (B * B) - (4 * A * C)
    if (delta < 0){
        alert("Não existem raízes reais")
    }else{
        x1 = (-B + Math.sqrt(delta)) / (2*A)
        x2 = (-B - Math.sqrt(delta)) / (2*A)
        alert("As raízes da equação são: " + x1 + " e " + x2)
    }
}