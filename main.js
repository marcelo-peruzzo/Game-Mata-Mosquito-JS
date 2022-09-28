let altura = 0
let largura = 0

AjustarTamanhoJogo()
posicaoRandomica()

function AjustarTamanhoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
}

function posicaoRandomica(){
    let posicaoX = Math.floor(Math.random() * largura) -90
    let posicaoY = Math.floor(Math.random() * altura) -90
    console.log(posicaoX, posicaoY)

    //logica para nao deixar o programa bugar em uma posição negativa e a imagem sumir da tela
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    //criar o elemento no html
    let mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    document.body.appendChild(mosquito)
}

function tamanhoAleatorio(){
    let tamanhos = Math.floor(Math.random() * 3)

    switch(tamanhos) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}



