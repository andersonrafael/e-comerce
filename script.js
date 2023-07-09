var carrinho = [];
var valorTotal = 0;

function adicionarAoCarrinho(produto, valor) {
    carrinho.push({ produto, valor });
    valorTotal += valor;
    alert(`Produto "${produto}" adicionado ao carrinho!\nValor: R$${valor.toFixed(2)}`);
    atualizarValorTotal();
}

function atualizarValorTotal() {
    var valorTotalElemento = document.getElementById("valorTotal");
    valorTotalElemento.textContent = `Valor Total: R$${valorTotal.toFixed(2)}`;
}

// Resto do código...

