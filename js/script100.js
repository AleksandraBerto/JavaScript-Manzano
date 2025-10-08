let nome = prompt("Digite seu nome :")
let sexo = prompt("Digite o seu sexo (M/F) :")

if ((sexo == "M") || (sexo == "m")) {
    alert("Ilmo Sr. " + nome)
} else
    if ((sexo == "F") || (sexo == "f")) {
        alert("Ilmo Sra. " + nome)
    } else{
        alert("Sexo inválido.")
    }