window.addEventListener("load",main)

let usuario = {
    nome: null,
    sobrenome: null,
    email: null,
    senha: null,
}

function main(){
    const nome = document.getElementById("nome")
    nome.addEventListener("keypress", atualizarNome)

    const sobrenome = document.getElementById("sobrenome")
    sobrenome.addEventListener("keypress", atualizarSobrenome)

    const email = document.getElementById("email")
    email.addEventListener("keypress", atualizarEmail)

    const senha = document.getElementById("senha")
    senha.addEventListener("keypress", atualizarSenha)
    

    const form = document.getElementById("registro")
    form.addEventListener("submit", enviar)
}

function atualizarNome(evento){
    usuario.nome = evento.target.value;
}

function atualizarSobrenome(evento){
    usuario.sobrenome = evento.target.value;
}

function atualizarEmail(evento){
    usuario.email = evento.target.value;
}

function atualizarSenha(evento){
    usuario.senha = evento.target.value;
}

async function enviar(evento){
    evento.preventDefault()

    //envia
    const resultado = await fetch('http://localhost:3333/api/cadastro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(usuario)
    })
}