function maiornumero(){

    let input1 = document.querySelector("#numero1")
    let input2 = document.querySelector("#numero2")
    let result = document.querySelector("#result")

    let n1 = parseFloat(document.querySelector("#numero1").value)
    let n2 = parseFloat(document.querySelector("#numero2").value)

    if ( n1 > n2 ) {
        result.innerHTML="O Primeiro número é maior."
    }else if( n2 > n1 ){
        result.innerHTML="O Segundo número é o maior."
    }else if( n1 == n2 ){
        result.innerHTML="Os dois números são iguais."
    }else{
        result.innerHTML="Insira um número"
    }
    
    
}