'use strict'

// fazendo uma função assíncrona para obter as imagens no momento certo
//await: faz com que o 'console.log' espere o tempo de carregamento da API
// response = resposta possível do servidor, nesse caso, pending, pq não houve tempo para responder sem o async

async function buscarImagens (raca){
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch (url) 
    const imagens = await response.json()
    console.log (imagens.message)
    return imagens.message
} 



function criarImagem(srcImagem) {
    const input = document.getElementById('galeria')
    const imagem = document.createElement('img')
    const legenda = document.createElement('div')
    const texto = document.createElement('label')

    imagem.src = srcImagem.url
    texto.textContent = srcImagem.nome

    galeria.appendChild(imagem)
    galeria.appendChild(legenda)
    legenda.appendChild(texto)

}
buscarImagens("doberman")