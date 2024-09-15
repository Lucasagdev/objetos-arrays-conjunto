// let jogo = {
//     nome: 'Final Fantasy'
// }

// let jogo2 = {
//     nome: 'Fallout'
// }

// let = videoGame = {
//     nome: 'Xbox',
//     valor: 3000,
//     jogos: ['Final Fantasy', 'Fallout', 'Fifa']
// }

// let jogo3 = {
//     nome: 'Fifa'
// }

// videoGame.jogos.push(jogo3)

// console.log(videoGame)

let cliente = {
    nome: 'Lucas',
    ulitmoPedido: {
        produto: 'Xbox',
        valor: 3000,
        jogos: [
            {nome: 'Fifa'}
        ]
    }
}

console.log(cliente.ulitmoPedido.jogos[0].nome)