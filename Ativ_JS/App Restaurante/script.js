document.addEventListener("DOMContentLoaded", function () {
    //url da API
    let API_url = "https://rafaelescalfoni.github.io/desenv_web/restaurante/items.json";

    //Elemento onde o cardápio será exibido
    let divCardapio = document.getElementById("cardapio");

    //Elemento onde o pedido do cliente será exibido 
    let divPedido = document.querySelector('.divPedido');

    //Recupera o pedido armazenado na sessionStorage (se existir)
    let pedido = JSON.parse(sessionStorage.getItem('pedido')) || [];

    //Função para pegar a API
    function pegaAPI(url, callback) {
        let https = new XMLHttpRequest();
        https.open('GET', url);
        https.send();

        https.onreadystatechange = function () {
            if (https.readyState == 4 && https.status == 200) {
                let API = https.responseText;
                let restaurante = JSON.parse(API);
                callback(restaurante);
            }
        };
    }

    //Função para criar os elementos do cardápio
    function cardapio(restaurante) {
        restaurante.forEach(item => {
            //criação da div para cada item do cardápio
            let divItem = document.createElement('div');
            divItem.classList.add("div-item");

            //criação do código do item, vulgo id
            let codeItem = document.createElement('h3');
            codeItem.classList.add("codeItem");
            codeItem.textContent = item.code;
            divItem.appendChild(codeItem);

            //criação do nome do item
            let nameItem = document.createElement('p');
            nameItem.classList.add("nameItem");
            nameItem.textContent = item.name;
            divItem.appendChild(nameItem);

            //criação da imagem do item
            let imgItem = document.createElement('img');
            imgItem.setAttribute('src', `https://rafaelescalfoni.github.io/desenv_web/restaurante/${item.photo}`);
            imgItem.setAttribute('alt', "Imagem");
            imgItem.classList.add('imgItem');
            divItem.appendChild(imgItem);

            //criação do preço do item
            let priceItem = document.createElement('p');
            priceItem.classList.add("priceItem");
            priceItem.textContent = item.price;
            divItem.appendChild(priceItem);

            //criação dos detalhes do item
            let detailsItem = document.createElement('p');
            detailsItem.classList.add("detailsItem");
            detailsItem.textContent = item.details;
            divItem.appendChild(detailsItem);

            //criação do botão para adicionar os itens no pedido
            let botaoAdd = document.createElement('button');
            botaoAdd.classList.add("button-adicionar");
            botaoAdd.textContent = "Adicionar ao pedido";

            //adiciona os itens no pedido, atualiza a exibição do pedido e armazena na sessionStorage
            botaoAdd.addEventListener('click', function () {
                pedido.push(item);
                attPedido();
                sessionStorage.setItem('pedido', JSON.stringify(pedido));
            });

            divItem.appendChild(botaoAdd);
            divCardapio.appendChild(divItem);
        });
    }

    //Função para atualizar as informações do pedido
    function attPedido() {
        let qtdComprada = pedido.length;
        let precoTotal = 0;

        //Limpa o conteúdo atual da divPedido
        let divPedidoElementos = document.querySelector('.divPedido');
        if (divPedidoElementos) {
            divPedidoElementos.innerHTML = '';
        } else {
            console.error("A divPedido não foi encontrada.");
            return;
        }

        //Cria uma lista (ul) para os preços unitários
        let listaPrecoUnitario = document.createElement('ul');

        //Adiciona os itens do pedido em divPedido
        pedido.forEach(item => {
            //Adiciona o preço unitário em lista
            let precoUnitarioItemList = document.createElement('li');
            precoUnitarioItemList.textContent = `${item.name}: ${item.price}`;
            listaPrecoUnitario.appendChild(precoUnitarioItemList);

            //Soma o preço total (mantendo como string)
            precoTotal += parseFloat(item.price.replace('$', ' ')) || 0;
        });

        let desconto = precoTotal * 0.1;
        let totalComDesconto = precoTotal - desconto;

        //Adiciona as informações em divPedido
        divPedidoElementos.innerHTML += `
            <h3>Quantidade Comprada:
                <span>${qtdComprada}</span>
            </h3>
            <h3>Preço Unitário:
                <ul class="listaPrecoUni">${listaPrecoUnitario.innerHTML}</ul>
            </h3>
            <h3>Total:
                <span>$${totalComDesconto.toFixed(2)}</span>
                <span class="taxaServico">(+10% de taxa de serviço)</span>
            </h3>`;
    }

    //limpa o sessionStorage
    const limpaStorage = () => {
        sessionStorage.removeItem('pedido')
    }

    //ao dar refresh na pagina, o limpaStorage é acionado
    window.addEventListener('beforeunload', limpaStorage);

    //Carrega o cardápio
    pegaAPI(API_url, cardapio);

    //Atualiza a exibição do pedido
    attPedido();

});
