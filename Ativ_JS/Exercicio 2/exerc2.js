function parimpar(){
    let input1 = document.querySelector("#num")
    let result = document.querySelector("#result")

    let n = parseInt(document.querySelector("#num").value)

    if ( n % 2 == 0 ) {
        result.innerHTML="O número é par"
    } else if ( n % 2 != 0) {
        result.innerHTML="O número é impar"
    }else{
        result.innerHTML="Digite um Número, não um texto"
    }
}