
let numero1;
let numero2;

function soma(){// (1)

    numero1 = parseFloat(document.getElementById('n1').value);
    numero2 = parseFloat(document.getElementById('n2').value);
    let resultadosoma = document.getElementById('resultadoDaSoma');
    let botaosoma = document.getElementById('botao');
    let somador = numero1 + numero2;

    resultadosoma.innerHTML = "O resultado da soma entre " + numero1 + " e " + numero2 + " é : " + somador;
}

function maior(){// (2)
    numero1 = parseFloat(document.getElementById('n1').value);
    numero2 = parseFloat(document.getElementById('n2').value);
    let resultadoDoMaior = document.getElementById('verificaqualmaior');
    let n1 = numero1;
    let n2 = numero2;
    
    if(n1 > n2){
        resultadoDoMaior.innerHTML = "O maior número é o " + n1;
    }else resultadoDoMaior.innerHTML = "O maior número é o " + n2;
}

function verificaPrimo(){// (3)
    numero1 = parseInt(document.getElementById('num').value);
    let resultadoDoPrimo = document.getElementById('verificaprimo');
    let num = numero1;
    let primo = true;

    if(num <= 1){
        primo = false;
    }else{    
        for(let i = 2; i <= Math.sqrt(num); i++){
            if (num % i == 0){
                primo = false;
                break;
            }
        }
    }
    
    if (primo){
        resultadoDoPrimo.innerHTML = num + " é primo";
    } else{
        resultadoDoPrimo.innerHTML = num + " não é primo";
    }
    // os números 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47,53, 59, 61, 67, 71, 73, 79, 83, 89 e 97
}

function calculahipotenusa(){// (4)
    numero1 = parseFloat(document.getElementById('n1').value);
    numero2 = parseFloat(document.getElementById('n2').value);
    resultadoHipotenusa = document.getElementById('respostahipotenusa');
    
    let cateto1 = numero1;
    let cateto2 = numero2;

    let hipotenusa = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));

    resultadoHipotenusa.innerHTML = "Considerando o Número 1 como Cateto 1, e o Número 2 como Cateto 2, temos a hipotenusa valendo: " + hipotenusa;
}

function novoSalario(){// (5)
    let salarioFunc = parseFloat(document.getElementById('salarioFuncionario').value);
    let percenReajuste = parseFloat(document.getElementById('percentualReajuste').value);
    let escreveSalario = document.getElementById('escreveNovoSalario');
    
    let valorReajuste = salarioFunc * (percenReajuste / 100);
    let salarioNovo = salarioFunc + valorReajuste;

    escreveSalario.innerHTML = "O novo salario do funcionario é: R$" + salarioNovo.toFixed(2);
}

function transformaFahemCel(){// (6)
    let fahrenheit = document.getElementById('tempFah').value;
    let respostaCalculo = document.getElementById('calculoTransformacao');
    
    let celsius = (fahrenheit - 32) * (5 / 9);

    respostaCalculo.innerHTML = fahrenheit + "° fahrenheit equivale a " + celsius + "° celsius";
}

function calculaMedia(){// (7)
    let mediaresultado = document.getElementById('resultadoMedia');
    let n1 = parseFloat(document.getElementById('nota1').value);
    let n2 = parseFloat(document.getElementById('nota2').value);
    let n3 = parseFloat(document.getElementById('nota3').value);

    let mediaFinal = ((n1 * 2) + (n2 * 3) + (n3 * 5)) / 10;

    mediaresultado.innerHTML = "A média final do aluno é : " + mediaFinal;
    
}
