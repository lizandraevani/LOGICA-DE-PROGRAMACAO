var nota1 = parseInt(prompt("digite a primeira nota"))
var nota2 = parseInt(prompt("digite a segunda nota"))
var nota3 = parseInt(prompt("digite a terceira nota"))
var nota4 = parseInt(prompt("digite a quarta nota"))
var media = (nota1 + nota2 + nota3 + nota4)/4

if(media >=6) {
document.write("você esta aprovado")
} 
else{
    document.write ("você esta reprovado")
}
