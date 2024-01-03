import { Router } from "express"

let usuarios = []

export const cadastroRouter = Router()

//obtem
cadastroRouter.post("/api/cadastro", function (req, res){
    const usuario = req.body

    usuarios.push(usuario)

    return res.status(201).json()
})

