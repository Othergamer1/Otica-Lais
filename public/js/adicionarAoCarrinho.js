let produtos = []

let carrinhoDeCompras = JSON.parse(sessionStorage.getItem("carrinho")) || [];

window.addEventListener("load", main)

async function main(){
    
    //pegando os produtos da api de produtos
    const resultado = await fetch("http://localhost:3333/api/produtos")
    const resultadoEmJSON = await resultado.json()

    //Atualizando a lista de produtos
    produtos = resultadoEmJSON
    
    
    principal()
}

function principal(){

    const itens = document.getElementsByClassName("produtos")
    
    for (let i = 0; i < itens.length; i++){
        itens[i].addEventListener("click", function(event) {
            console.log("Clicou")
            const addToCartBtn = event.target.closest('.addToCartBtn');
            if (addToCartBtn) {
                addItemToCart({ currentTarget: addToCartBtn });
            }
        });
    }
}

function addItemToCart(evento){
    const itemCart = getProduto(evento.currentTarget.id);
    if (itemCart != null) {
        const elementocart = procuraItemNoCarrinho(itemCart.id)
        if(elementocart){
            elementocart.qtd += 1
        } else {
            const cart = {
                id: itemCart.id,
                nome: itemCart.nome,
                img: itemCart.img,
                valor: itemCart.valor,
                promo: itemCart.promo,
                qtd: 1
            };

            carrinhoDeCompras.push(cart);
        }

        sessionStorage.setItem("carrinho", JSON.stringify(carrinhoDeCompras));
    }
}

function  procuraItemNoCarrinho(id){
    for (let i = 0; i < carrinhoDeCompras.length; i++){
        if(id == carrinhoDeCompras[i].id){
            return carrinhoDeCompras[i]
        }
    }
    return null
}

function getProduto(id){
    for (let i = 0; i < produtos.length; i++){
        if(produtos[i].id == id){
            return produtos[i]
        }
    }
    return null;
}