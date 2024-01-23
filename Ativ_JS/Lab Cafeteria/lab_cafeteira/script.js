const menu = document.querySelectorAll(".item");
let total = 0;

let carrinho = [];

function Item(nome, preco){
    this.nome = nome;
    this.preco = parseFloat(preco.substr(2));
}

//adiciona no Storage da API
const updateSessionStorage = () => {
    sessionStorage.setItem('carrinho', JSON.stringify(carrinho));
}

const addChart = product => {
    carrinho.push(product);
    updateSessionStorage();
}

const addProductList = (selector, product) => {
    const listaItensDOM = document.querySelector(selector);
    listaItensDOM.innerHTML += `<li>${product.nome}</li>`;
}

const updateDisplay = (selector, value) => {
    const valorTotalDOM = document.querySelector(selector)
    valorTotalDOM.innerHTML = value;
}

menu.forEach(item => {
    item.addEventListener("click", () => {
        const nomeItem = item.querySelector("figcaption").textContent;
        const precoItem = item.querySelector(".item-price").textContent;
        const produtoSelecionado = new Item(nomeItem, precoItem)
        console.log(`Produto escolhido: ${produtoSelecionado.preco}`)

        //adicionar no carrinho
        addChart(produtoSelecionado)

        //adicionar no dom
        addProductList(".itens", produtoSelecionado)

        //somar valor total
        total += produtoSelecionado.preco;
        updateDisplay(".total", `<li class="total">R$${total}</li>`)
    })
});

//limpar o sessionStorage
const limpaStorage = () => {
    sessionStorage.removeItem('carrinho');
}

//aacionando a função ao dar refresh na pagina
window.addEventListener('beforeunload', limpaStorage);

//verificar se há dados no carrinho no sessionStorage ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const carrinhoData = sessionStorage.getItem('carrinho');
    if (carrinhoData) {
        carrinho = JSON.parse(carrinhoData);

        //atualiza o display com os itens do carrinho
        carrinho.forEach(item => {
            addProductList(".itens", item);
        });
    }
});