window.addEventListener("load", main)

let usuario = {
    nome: null,
    sobrenome: null,
}

function main(){
    const email = document.getElementById("email")
    email.addEventListener("keypress", atualizarEmail)

    const senha = document.getElementById("senha")
    senha.addEventListener("keypress", atualizarSenha)

    const form = document.getElementById("registro")
    form.addEventListener("submit", enviar)
}

function atualizarEmail(evento){
    usuario.email = evento.target.value;
}

function atualizarSenha(evento){
    usuario.senha = evento.target.value;
}

//////////////////////////////////////
async function enviar(evento){
    evento.preventDefault()

    const resultado = await fetch('http://localhost:3333/api/confirmar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(usuario)
    })
}