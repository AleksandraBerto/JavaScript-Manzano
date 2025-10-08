let numero = parseInt(prompt("Digite um número :"))

if (numero < 0){
    positivo = numero * -1
    alert("O número " + numero + " não é positivo!\n" + "O resultado da conversão é : " + positivo)
}else{
    alert("O número " + numero + " já é positivo")
}