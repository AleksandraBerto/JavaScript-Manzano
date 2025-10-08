let nota01 = parseFloat(prompt("Digite a primeira nota :"))
let nota02 = parseFloat(prompt("Digite a segunda nota :"))
let nota03 = parseFloat(prompt("Digite a terceira nota :"))
let nota04 = parseFloat(prompt("Digite a quarta nota :"))

media = (nota01 + nota02 + nota03 + nota04) / 4

if(media >= 7){
    alert("O aluno está aprovado!")
}else{
    let notaexame = parseFloat(prompt("Digite a nota do exame :"))
    novamedia = media + notaexame
    if (novamedia > 5){
        alert("O aluno foi aprovado no exame!")
    }else{
        alert("O aluno foi reprovado!")
    }
}