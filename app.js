'use strict'

const botaoBuscar = document.getElementById('buscar')
const input = document.getElementById('inputRaca')
const galeria = document.getElementById('galeria')

// fazendo uma função assíncrona para obter as imagens no momento certo
//await: faz com que o 'console.log' espere o tempo de carregamento da API
// response = resposta possível do servidor, nesse caso, pending, pq não houve tempo para responder sem o async

async function buscarImagens(raca) {
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch(url)
    const imagens = await response.json()

    console.log(imagens.message)
    return imagens.message
}

async function exibirImagens() {
    const galeria = document.getElementById("galeria")
    const raca = document.getElementById('inputRaca').value.toLowerCase()

    galeria.innerHTML = "" // limpa as imagens antigas

    const listaImg = await buscarImagens(raca)

    listaImg.forEach(url => {
        const img = document.createElement("img")
        img.src = url
        galeria.appendChild(img)
      })
}

botaoBuscar.addEventListener('click', exibirImagens)