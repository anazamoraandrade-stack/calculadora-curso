let peso = prompt("Digite seu peso (Kg):")
let altura = prompt("Informe a sua altura (m)")

let resultado = calcularIMC(peso, altura)

function calcularIMC(peso, altura){
    return peso / (altura * altura)
}

function classificarIMC(iMC){
    if(imc >=40){
        alert("obesidade grau III")
    }else if (imc >=35){
        alert()
    }
}

    
