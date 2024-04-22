// Itens do HTML
// Divs
const divPokedex = document.querySelector(".div-pokedex");
const divExtraPoke = document.querySelector(".extraPokedex");

// Pesquisa
const pesquisarPoke = document.querySelector(".pesquisaPoke");
console.log(pesquisarPoke);

// Botões
const btnProximo = document.querySelector(".btn-proximo");
const btnAnterior = document.querySelector(".btn-anterior");

// Variável para armazenar o número do Pokémon atual
let pokemonAtual = 1;

// Função para criar todos os elementos do html relacionados ao pokemon
function criarElementos(dados) {
    // Criando os elementos
    // Criando o elemento que irá conter a imagem do pokemon
    const imgPokemon = document.createElement("img");
    imgPokemon.classList.add('imgPoke');
    imgPokemon.src = dados.sprites.front_default;
    divPokedex.appendChild(imgPokemon);

    // Criando a lista que irá conter o id e o nome 
    const listNomeIdPoke = document.createElement("ul");
    listNomeIdPoke.classList.add('listNameId');

    // Criando o elemento que irá conter o nome do pokemon
    const nomePokemon = document.createElement("li");
    nomePokemon.innerText = dados.name;
    nomePokemon.classList.add('nomePoke');

    // Criando o elemento que irá conter o id do pokemon
    const idPokemon = document.createElement("li");
    idPokemon.innerText = dados.id + "- ";
    idPokemon.classList.add("idPoke");

    // Criando a div que irá conter o id e o nome
    const divNameIdPoke = document.createElement("div");
    divNameIdPoke.classList.add('divNameId');
    divPokedex.appendChild(divNameIdPoke);

    // Fazendo as devidas atribuições para cada elemento
    listNomeIdPoke.append(idPokemon, nomePokemon);
    divNameIdPoke.append(listNomeIdPoke);

    // Lista que vai conter os tipos dos pokemons na div de informações extras
    const listTypesPoke = document.createElement("ul")
    listTypesPoke.classList.add("listTypes");
    divExtraPoke.appendChild(listTypesPoke);

    const typesPoke = dados.types;
    // Percorre o array typesPoke que contem todos os tipos dos pokemons
    // e depois cria uma li com cada tipo do pokemon selecionado
    typesPoke.forEach(types => {
        const liTypePoke = document.createElement("li");
        liTypePoke.classList.add("typesPoke");
        liTypePoke.innerText = types.type.name + " ";
        listTypesPoke.appendChild(liTypePoke);
    });

    // Lista que vai conter os status dos pokemons na div de informações extras 
    const listStatusPoke = document.createElement("ul");
    listStatusPoke.classList.add("listStatus");
    divExtraPoke.appendChild(listStatusPoke);

    const statusPoke = dados.stats;
    // Percorre o array statusPoke que contem todos os status dos pokemons
    // e depois cria uma li com as informações dos status iniciais do pokemon
    statusPoke.forEach(status => {
        const liStatsPoke = document.createElement("li");
        liStatsPoke.classList.add("statsPoke");
        liStatsPoke.innerText = status.stat.name + ": " + status.base_stat;
        listStatusPoke.appendChild(liStatsPoke);
    });
}

// Função para buscar os dados do Pokémon
function buscarPokemon(url) {
    fetch(url)
        .then(resposta => resposta.json()) // Converte a resposta obtida em JSON
        .then(dados => {
            // dados vai obter as informações dos pokemons
            // Limpa as divs antes de adicionar novos dados
            divPokedex.innerHTML = "";
            divExtraPoke.innerHTML = "";

            criarElementos(dados);
        })
        .catch(error => {
            console.log('Ocorreu um erro: ', error)
        });
}

// Função para o botão de próximo
btnProximo.addEventListener("click", function () {
    pokemonAtual++; // Incrementa o número do Pokémon
    url = `https://pokeapi.co/api/v2/pokemon/${pokemonAtual}`; // Atualiza o valor da variável url
    buscarPokemon(url); // Busca os dados do próximo Pokémon
});

// Função para o botão de anterior
btnAnterior.addEventListener("click", function () {
    if (pokemonAtual > 1) { // Garante que não estamos no primeiro Pokémon
        pokemonAtual--; // Decrementa o número do Pokémon
        url = `https://pokeapi.co/api/v2/pokemon/${pokemonAtual}`; // Atualiza o valor da variável url
        buscarPokemon(url); // Busca os dados do Pokémon anterior
    }
});

// Buscar os dados do primeiro Pokémon ao carregar a página
let url = `https://pokeapi.co/api/v2/pokemon/${pokemonAtual}`;
buscarPokemon(url);

// Adicionando evento para pesquisar ao pressionar Enter
pesquisarPoke.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        const searchValue = pesquisarPoke.value;
        // Verifica se o valor digitado é um número ou nome do Pokémon
        if (!isNaN(searchValue) && searchValue !== "") {
            url = `https://pokeapi.co/api/v2/pokemon/${searchValue}`;
        } else {
            url = `https://pokeapi.co/api/v2/pokemon/${searchValue.toLowerCase()}`;
        }
        buscarPokemon(url);
    }
});
