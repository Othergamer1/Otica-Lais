let carrinhoDeCompras = JSON.parse(sessionStorage.getItem("carrinho"))  || [];

window.addEventListener("load", main)


function main(){
    renderizarCarrinho()
    calculaTotal()
    atualizarBotao()
}

//Criando carrinho
function renderizarCarrinho() {
    //Pegando a div com a classe carrinho
    const carrinho = document.getElementById("carrinho")
    for(let i = 0; i < carrinhoDeCompras.length; i++){

        //Criando Item no Carrinho
        const itemCart = document.createElement("div")

        //adiciona classe a div
        itemCart.classList.add("carrinho-item")

        let valor =  carrinhoDeCompras[i].valor
        valor -= carrinhoDeCompras[i].valor * carrinhoDeCompras[i].promo

        itemCart.id = carrinhoDeCompras[i].id

        itemCart.innerHTML = `
        <img src="${carrinhoDeCompras[i].img}" alt="Óculos 1">
        <div class="item-detalhes">
            <h2>${carrinhoDeCompras[i].nome}</h2>
            <p>${carrinhoDeCompras[i].qtd}</p>
            <p>${valor.toFixed(2)}</p>
        </div>
        <div class="item-açao">
            <button class="remove-item">Remover</button>
        </div>
        `
        carrinho.appendChild(itemCart)
    }

    const botaoRemove = document.getElementsByClassName("remove-item")
    for(let i = 0; i < botaoRemove.length; i++){
        botaoRemove[i].addEventListener("click", removerItemDoCarrinho);
        
    }
}

function calculaTotal(){
    let valorTotal = 0;
    let subtotal = document.getElementById("subtotal")
    let Frete = document.getElementById("frete")
    let total = document.getElementById("final")
    for (let i = 0; i < carrinhoDeCompras.length; i++){
        valorTotal += carrinhoDeCompras[i].valor * carrinhoDeCompras[i].qtd;
    }
    
    subtotal.innerHTML = `Subtotal: R$ ${valorTotal.toFixed(2)}`
    if (valorTotal == 0){
        frete = 0
    } else {
        frete = 20
    }
    Frete.innerHTML = `Frete: R$ ${frete}`
    total.innerHTML = `Total: R$ ${(valorTotal + frete).toFixed(2)}`
}

function atualizarBotao(){
    const teste = document.getElementById("carrinho")
    const botao = document.getElementById("finalizar");
    if (teste.children.length == 0){
        botao.disabled=true;
        console.log("sim")
    } else {
        botao.disabled=false;
    }
}


function removerItemDoCarrinho(evento) {
    const itemCart = evento.target.parentElement.parentElement
    
    const newCart = removerItemDoCarrinhoPorID(itemCart.id)
    carrinhoDeCompras = newCart

    //remover da sessionStorage
    sessionStorage.setItem("carrinho", JSON.stringify(newCart))

    //remover da página
    itemCart.remove()
    calculaTotal()
    atualizarBotao()

}

function removerItemDoCarrinhoPorID(id) {
    const tempCart = []
    for (let i = 0; i < carrinhoDeCompras.length; i++) {
        if (id != carrinhoDeCompras[i].id) {
            tempCart.push(carrinhoDeCompras[i])
        }
    }
    return tempCart;
}