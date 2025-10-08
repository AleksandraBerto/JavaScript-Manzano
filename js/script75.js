let dividendo = parseInt(prompt("Digite o dividendo :"))
let divisor = parseInt(prompt("Digite o divisor :"))

if (divisor == 0){
    alert("Divisão por zero não é permitida!")
}else{
    quociente = 0
    do{
        dividendo = dividendo - divisor
        if (dividendo >= 0){
            quociente++            
        }
    }while (dividendo > 0)
        console.log("Resultado da divisão inteira: "+ quociente)
}