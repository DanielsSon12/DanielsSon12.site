// Pegando os inputs
let nomeInput = document.querySelector(".nome");
let pesoInput = document.querySelector(".peso");

// Pegando os botões
const btnCalc = document.querySelector(".calcular");
const btnLimpar = document.querySelector(".limpar");

// Pegando a div que vai conter a resposta
const divResposta = document.querySelector(".div_resposta");

// Função para apagar as informações e a resposta 
function limparForm() {
    nomeInput.value = "";
    pesoInput.value = "";
    divResposta.innerHTML = "";
}

// Função que irá criar cada elemento da resposta
function criarElemento(response) {
    const nomeResposta = document.createElement("h2");
    nomeResposta.classList.add("nomeResposta");
    nomeResposta.innerText = nomeInput.value;
    divResposta.appendChild(nomeResposta);

    const resposta = document.createElement("p");
    resposta.classList.add("resposta");
    resposta.innerText = response;
    divResposta.appendChild(resposta);
}

// Função para o click do botão de calcular
btnCalc.addEventListener("click", function () {
    let response = "";
    // Aqui pegamos o valor do input do peso(pesoInput.value), e atribuímos a váriavel peso passando para float(parseFloat)
    let peso = parseFloat(pesoInput.value);

    if (peso > 0) {
        // O toFixed é uma função que limita a quantidade de números depois da vírgula
        const calculo = (0.035 * peso).toFixed(1);
        response = `Você deve tomar ${calculo}L de água por dia.`;
        criarElemento(response);
    } else {
        // Caso o usuário não insira as informações pedidas, ou insira algo errado, ira aparecer essa mensagem na tela
        response = "INSIRA AS INFORMAÇÕES CORRETAMENTE.";
        criarElemento(response);
    }
});

// Aqui chamamos a função limparForm quando o botão de limpar for clicado
btnLimpar.addEventListener("click", limparForm);