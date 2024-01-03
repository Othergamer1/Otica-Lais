import { Router } from "express"

export const produtos = [
    {
    id: 1,
    nome: "Óculos preto fosco",
    img: "img/produtos/glasses(1).jpg",
    valor: 129.99,
    vendas: 112,
    promo: 0,
    },
    {
    id: 2,
    nome: "Óculos de Sol",
    img: "img/produtos/glasses(2).jpg",
    valor: 129.99,
    vendas: 302,
    promo: 0,
    },
    {
    id: 3,
    nome: "Óculos Vermelho",
    img: "img/produtos/glasses(3).jpg",
    valor: 129.99,
    vendas: 133,
    promo: 0,
    },
    {
    id: 4,
    nome: "Óculos Rosa",
    img: "img/produtos/glasses(4).jpg",
    valor: 129.99,
    vendas: 45,
    promo: 0,
    },
    {
    id: 5,
    nome: "Óculos Preto",
    img: "img/produtos/glasses(5).jpg",
    valor: 229.99,
    vendas: 80,
    promo: 0.65,
    },{
    id: 7,
    nome: "Lentes de contato hydraclear",
    img: "img/produtos/lentes (2).jpg",
    valor: 29.99,
    vendas: 65,
    promo: 0.5,
    },
    {
    id: 6,
    nome: "Óculos de Onçinha",
    img: "img/produtos/glasses(6).jpg",
    valor: 129.99,
    vendas: 71,
    promo: 0.3,
    },
    
    {
    id: 8,
    nome: "Lentes de contato Coloridas",
    img: "img/produtos/lentes (1).jpg",
    valor: 29.99,
    vendas: 54,
    promo: 0.5,
    },
    {
    id: 9,
    nome: "Lentes de contato Coloridas tri-kolor",
    img: "img/produtos/lentes (3).jpg",
    valor: 29.99,
    vendas: 299,
    promo: 0.1,
    },
    {
    id: 10,
    nome: "Limpa lentes",
    img: "img/produtos/clear.jpg",
    valor: 129.99,
    vendas: 201,
    promo: 0.15,
    },
]

export const produtosRoutes = Router()

//metodo getter
produtosRoutes.get("/api/produtos", function(requisicao, resposta){//Metodo getter
    return resposta.status(200).json(produtos)
    //retorna o status 200
    //e tipo json "produtos"
})