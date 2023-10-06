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
        const api = await fetch('https://apiadvisor.climatempo.com.br/api/v1/locale/city?name=${cidade}');
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
async function enviarComentario(comentario) {

    const parametros = {
      method: 'POST', // Ou 'PUT', 'PATCH', etc., dependendo da sua API
      headers: {
        'Content-Type': 'application/json', // Defina o tipo de conteúdo apropriado
      },
      body: JSON.stringify(comentario), // Converta o objeto de comentário em JSON
    };

    // Substitua a URL abaixo pela URL do endpoint da API do servidor de comentários
    const url = 'https://sua-api.com/comentarios';

    try {
      const response = await fetch(url, parametros);

      if (!response.ok) {
        // Se a resposta não for bem-sucedida, rejeite a Promise com uma mensagem de erro
        throw new Error(`Erro ao enviar o comentário: ${response.status}`);
      }

      // Aguarde a resposta ser processada e retorne uma mensagem de sucesso
      const data = await response.json();
      return data;
    } catch (error) {
      // Se ocorrer um erro durante a solicitação, rejeite a Promise com o erro
      throw error;
    }
  }
    
    const novoComentario = {
      autor: 'Programador',
      texto: 'Este é um ótimo artigo!',
    };

    enviarComentario(novoComentario)
    
    .then((resposta) => {
    
    console.log('Comentário enviado com sucesso:', resposta);
    
    })
    
    .catch((erro) => {
    
    console.error('Erro ao enviar comentário:', erro);
    
    });
