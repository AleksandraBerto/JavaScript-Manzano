let nota01 = parseFloat(prompt("Digite a primeira nota :"))
let nota02 = parseFloat(prompt("Digite a segunda nota :"))
let nota03 = parseFloat(prompt("Digite a terceira nota :"))
let nota04 = parseFloat(prompt("Digite a quarta nota :"))

media = (nota01 + nota02 + nota03 + nota04) / 4

if(media >= 5){
    alert("O aluno foi aprovado!")
}else{
    alert("O aluno foi reprovado!")
}