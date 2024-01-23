//ATIVIDADE 1
const produtos = [
    {nome: 'Laptop', preco: 1000, quantidade: 5},
    {nome: 'Mouse', preco: 20, quantidade: 10},
    {nome: 'Teclado', preco: 30, quantidade: 8}
];

const calcularValorTotalEstoque = produtos => {
    let qtd = 0;
    produtos.forEach(element => {
        qtd += element.preco * element.quantidade;
    });
    return (qtd);
}

const valorTotal = calcularValorTotalEstoque(produtos);
document.querySelector('#produtoResposta').innerHTML = "Valor total do estoque: "+valorTotal;

//ATIVIDADE 2
let buscarPrevisaoTempo = document.querySelector('#buscar');
let InputCidade = document.querySelector('#cidade');

document.addEventListener('DOMContentLoaded', function(){
    const buscarAPI = async cidade => {
        //Implementação aqui usando a Fetch API
        const api = await fetch('https://api.openweathermap.org/data/2.5/weather?q=${cidade}');
    }
    
    buscarPrevisaoTempo.addEventListener("click", function() {
        const cidade = InputCidade.value;
        if(cidade.trim() == ""){
            alert("Digite o nome da cidade!");
            return;
        }
    
        fetch(buscarAPI(cidade))
            .then((response) => {
                if(!response.ok){
                    throw new Error (`Houve um erro na requisição: ${response.status}`);
                }
                return response.json
            })
            .then((data) => {
                const temperatura = data.data.temperature;
                const condicoes = data.data.condition;

                document.querySelector('#resultado').innerHTML = `
                    <h2>Previsão do tempo para ${cidade}</h2>
                    <p>Temperatura: ${temperatura} C°</p>
                    <p>Condições: ${condicoes}</p>
                `;
            })
            .catch((error) => {
                console.error("Erro ao tentar obter a previsão do tempo: ", error);
                document.querySelector('#resultado').innerHTML = `Erro ao tentar buscar a previsão do tempo.`;
            })
    })
});

//ATIDADE 3
async function enviarComentario(comentario){
  //criação da promise
  return new Promise((resolve, reject) => {
    //url do local pra onde vai o comentario
    const url = 'https://danielsson12.github.io/DanielsSon12.site/ExercJS/Laboratório%20Script/index.html';

    //configuração da requisição
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',//o conteúdo vai ser enviado por JSON
      },
      body: JSON.stringify({comentario}),//vai conerverter o objeto em uma string JSON
    };

    //realiza a requisição API por fetch
    fetch(url, options)
    .then(response => {
      if(!response.ok){
        throw new Error('Erro da rede - ${response.status}');
      }
      return response.json();//vai converter a resposta pra JSON
    })
    .then(data => {
      //resolva a promise com os dados da resposta
      resolve(data);
    })
    .catch(error => {
      //rejeita a promise em caso de erro
      reject(error);
    });
  });
}

enviarComentario('Este é um ótimo artigo!')
.then(() => {
  console.log('Comentário enviado com sucesso.');
})
.catch((erro) => {
  console.error('Erro ao enviar comentário: ', erro);
});