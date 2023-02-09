function imc(){
    let nome = document.querySelector("#nome").value
    let altura = document.querySelector("#altura").value
    let peso = document.querySelector("#peso").value
    let resultado = document.querySelector("#resultado")

    if(nome !== '' && altura !== '' && peso !== ''){


        //peso / (altura * altura)
        valorImc = (peso / (altura * altura)).toFixed(1)
        //tofixed serve para limirar a quantidade de algaritmos depois do "." ou ","

        let tipoImc
        if(valorImc <18.5){
            tipoImc = 'Abaixo do peso'
        } else if(valorImc > 18.5 && valorImc < 25){
            tipoImc = 'peso ideial'
        }else if(valorImc < 30){
            tipoImc = 'um pouco acima do peso'
        }else if(valorImc < 35){
            tipoImc = 'obesidade grau 1'
        }else if (valorImc < 40){
            tipoImc = 'colocar obesidade grau 2'
        }else{
            tipoImc = 'obesidade grau 3'
        }

        resultado.textContent = `${nome} Seu IMC é ${valorImc} e você está ${tipoImc}`


    }else{
        resultado.textContent = 'Preencha todos os campos'
    }

}