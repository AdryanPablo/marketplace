import Home from '../paginas/Home.js'

export default function Conteudo() {
    const Conteudo = document.createElement('main')

    Conteudo.appendChild(Home())

    return Conteudo
}