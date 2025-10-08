function Enquanto(){
    let contadora = 0
    let resposta = "" /*fracamente dipada, então ele está tipo declarando o tipo da variavel para string */

    while (contadora < 10){
        resposta= resposta + contadora + "<br>"
        contadora = contadora + 1
    }
    document.getElementById("aleks").innerHTML = resposta
}