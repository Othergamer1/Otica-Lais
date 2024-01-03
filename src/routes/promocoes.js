import { Router } from "express"

import { produtos } from "./produtos.js"

const promocoes = []

for (let i = 0; i < produtos.length; i++){
    if(produtos[i].promo > 0){
        promocoes.push(produtos[i])
    }
}

export const promocoesRoutes = Router()

promocoesRoutes.get("/api/promocoes", function(requisicao, resposta){//Metodo getter
    return resposta.status(200).json(promocoes)
    //retorna o status 200
    //e tipo json "promocoes"
})