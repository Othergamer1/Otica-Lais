let maisVendidos = []
let promocoes = []

let indexA = 1;
let indexB = 1;

main()

async function main(){
    //pegando os produtos da api de mais vendidos
    const resultadoA = await fetch("http://localhost:3333/api/maisVendidos")
    const resultadoB = await fetch("http://localhost:3333/api/promocoes")

    const resultadoEmJSONA = await resultadoA.json()
    const resultadoEmJSONB = await resultadoB.json()

    //Atualizando a lista de produtos
    maisVendidos = resultadoEmJSONA
    console.log(maisVendidos)
    promocoes = resultadoEmJSONB
    
    atualizarCarrosselA()
    atualizarCarrosselB()
    document.querySelectorAll(".antBtn").forEach(function(antBtn) {

        antBtn.addEventListener("click", antClicado)
    });

    document.querySelectorAll(".proxBtn").forEach(function(proxBtn) {
        proxBtn.addEventListener("click", proxClicado)
    });
}

function antClicado(e){
    const chamada = e.currentTarget.parentElement
    console.log(chamada)
    if (indexA > 1 && chamada.id == "mais-vendidos"){
        indexA--
    }

    if (indexB > 1 && chamada.id == "ate60off"){
        indexB--
    }
    console.log(indexA + " " + indexB)
    atualizarCarrosselA()
    atualizarCarrosselB()
}

function proxClicado(e){
    const chamada = e.currentTarget.parentElement
    console.log(chamada)
    if (indexA < 4 && chamada.id == "mais-vendidos"){
        indexA++
    }

    if (indexB < 4 && chamada.id == "ate60off"){
        indexB++
    }
    console.log(indexA + " " + indexB)
    atualizarCarrosselA()
    atualizarCarrosselB()
}

function atualizarCarrosselA(){
        
    const carrossel = document.getElementById("mais-vendidos-carrossel")
    carrossel.innerHTML = ""
    for (let i = indexA; i <= (indexA + 2); i++){
        let valor = maisVendidos[i-1].valor;

        if(maisVendidos[i-1].promo > 0){
            valor = valor - (valor * maisVendidos[i-1].promo)
        }

        const inteiro = Math.floor(valor);
        const decimal = (valor - inteiro).toFixed(2).slice(1);


        const div = document.createElement("div")
        div.innerHTML =`<a href=""><img src="${maisVendidos[i-1].img}" alt="$imagem do produto">`
        if(maisVendidos[i-1].promo > 0){
            div.innerHTML +=`
            <p>${maisVendidos[i-1].nome}</p><p>R$ ${inteiro} <sup>${decimal} ${(maisVendidos[i-1].promo)*100}% OFF</sup> </p></a>`
        } else {
            div.innerHTML +=`<p>${maisVendidos[i-1].nome}</p><p>R$ ${inteiro} <sup>${decimal}</sup></p></a>`
        }
        div.innerHTML +=`
        <button type="button" class="addToCartBtn" id="${maisVendidos[i-1].id}">
            <img src="img/car.png" alt="carrinho" height="40px"></button>
        `
        carrossel.appendChild(div)
    }
}

function atualizarCarrosselB(){
    const carrossel = document.getElementById("ate60off-carrossel")
    carrossel.innerHTML = ""
    for (let i = indexB; i <= (indexB + 2); i++){
        let valor = promocoes[i-1].valor;

        if(promocoes[i-1].promo > 0){
            valor = valor - (valor * promocoes[i-1].promo)
        }

        const inteiro = Math.floor(valor);
        const decimal = (valor - inteiro).toFixed(2).slice(1);

        const div = document.createElement("div")
        div.innerHTML =`<a href=""><img src="${promocoes[i-1].img}" alt="$imagem do produto">`
        if(promocoes[i-1].promo > 0){
            div.innerHTML +=`
            <p>${promocoes[i-1].nome}</p><p>R$ ${inteiro} <sup>${decimal} ${(promocoes[i-1].promo)*100}% OFF</sup> </p></a>`
        } else {
            div.innerHTML +=`<p>${promocoes[i-1].nome}</p><p>R$ ${inteiro} <sup>${decimal}</sup></p></a>`
        }
        div.innerHTML +=`
        <button type="button" class="addToCartBtn" id="${promocoes[i-1].id}">
            <img src="img/car.png" alt="carrinho" height="40px"></button>
        `
        carrossel.appendChild(div)
    }
}