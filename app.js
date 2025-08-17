'use script'

import funcionarios from "./funcionario.json" with {type: "json"}

function criarFuncionario(funcionario) {
    const container = document.createElement('div')
    container.className = 'container'

    const foto = document.createElement('img')

    const nome = document.createElement('span')
    const cargo = document.createElement('p')

    foto.src = `./img/${funcionario.imagem}`
    nome.textContent = funcionario.nome
    cargo.textContent = funcionario.cargo


    body.appendChild(container)
    container.appendChild(foto)
    container.appendChild(nome)
    container.appendChild(cargo)

}

funcionarios.forEach(criarFuncionario)