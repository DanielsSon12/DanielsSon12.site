
function numeroPTotalN(){
    let result = document.getElementById('nTresult');
    let texto = document.getElementById('frase').value;
    let quantLetra = texto.replace(/\s/g, '').length; // o replace() retorna uma nova string com algumas ou todas as correspondências de um padrão substituídas por um determinado caractere(s)
    let quantPalavra = texto.split(' ').length; // o split() divide uma string em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array
    result.innerHTML = "O texto digitado tem " + quantLetra + " letras, e " + quantPalavra + " palavras.";
}


function ocorrencia(){
    let result2 = document.getElementById('ocoresult');
    let texto = document.getElementById('frase').value;

    let ocorrencias = texto.split(/\W+/); //W+ significa que vamos considerar tudo que não é letra como separador
    let contagemPalavra = {}; //Cria um objeto para armazenar a contagem de palavras

    for(let i = 0; i < ocorrencias.length; i++) //Percorre o array de palavras e atualiza a contagem de palavras
    {
        let ocorren = ocorrencias[i];

        if (contagemPalavra[ocorren]) {
            contagemPalavra[ocorren]++; //Se a palavra ja existe na frase, adiciona mais um na contagem de palavras
            
        }else{
            contagemPalavra[ocorren] = 1; //Se a palavra ainda não existe na frase, se cria uma nova entrada no array com contagem 1
        }
    }
    
    result2.textContent = JSON.stringify(contagemPalavra, null, 2);
}

function marcar(){
    let result3 = document.getElementById('marqueresult');
    let texto = document.getElementById('frase').value;
    let Marcacao = document.getElementById('procure').value;

    let encontraOcoPala = new RegExp(Marcacao, "gi"); // Cria uma expressão regular para encontrar todas as ocorrências da palavra no texto
    let Marcado = texto.replace(encontraOcoPala, `<b> ${Marcacao} </b>`); // Substitui cada ocorrência da palavra por uma versão em negrito da mesma palavra

    result3.innerHTML = Marcado;
}

function substituicao(){
    let result4 = document.getElementById('substituiresult');
    let texto = document.getElementById('frase').value;
    let substi = document.getElementById('substitui').value;
    let novaPa = document.getElementById('novaPalavra').value;

    let novoTexto = texto.replace(new RegExp(substi, 'g'), novaPa);

    result4.innerHTML = novoTexto;
}