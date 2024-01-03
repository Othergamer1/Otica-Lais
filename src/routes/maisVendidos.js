import { Router } from "express"

import { produtos } from "./produtos.js"

const maisVendidos = []

//Ordenação do vetor de produtos
bubbleSort(produtos)

function bubbleSort(vetor){
	let aux
	let foiTrocado = true
	for (let j = 0; j < vetor.length - 1; j++){
		for (let i = 0; i < vetor.length - 1 - j; i++){
			if (vetor[i].vendas < vetor[i+1].vendas){//Decrescente
				aux = vetor[i];
				vetor[i] = vetor[i+1];
				vetor[i+1] = aux;
				foiTrocado = true;
			}
		}
		if (!foiTrocado){
			break;
		}
	}
}


//Seleção dos itens mais vendidos
for (let i = 0; i < 6; i++){
    maisVendidos.push(produtos[i])
}

export const maisVendidosRoutes = Router()

maisVendidosRoutes.get("/api/maisVendidos", function(requisicao, resposta){//Metodo getter
    return resposta.status(200).json(maisVendidos)
    //retorna o status 200
    //e tipo json "mais-vendidos"
})