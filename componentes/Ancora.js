import alterarPagina from '../modulos/alterarPagina.js'

export default function Ancora(nome) {
    const Ancora = document.createElement('a')
    Ancora.setAttribute('id', nome)

    Ancora.textContent = nome

    Ancora.addEventListener('click', () => alterarPagina(nome))

    return Ancora
}