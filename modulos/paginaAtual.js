import Home from '../paginas/Home.js'
import Entrar from '../paginas/Entrar.js'
import Cadastrar from '../paginas/Cadastrar.js'
import Contato from '../paginas/Contato.js'
import Sair from '../paginas/Sair.js'

export default function paginaAtual(pagina) {
    let paginaAtual

    if (pagina == 'Entrar') {

        paginaAtual = Entrar()

    } else if (pagina == 'Cadastrar') {

        paginaAtual = Cadastrar()

    } else if (pagina == 'Contato') {

        paginaAtual = Contato()

    } else if (pagina == 'Sair') {

        paginaAtual = Sair()

    } else {

        paginaAtual = Home()

    }

    return paginaAtual
}