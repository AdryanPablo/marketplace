import Cabecalho from './componentes/Cabecalho.js'
import Conteudo from './componentes/Conteudo.js'
import Rodape from './componentes/Rodape.js'

const root = document.querySelector('body')

window.addEventListener('load', () => {

    root.appendChild(Cabecalho())
    root.appendChild(Conteudo())
    root.appendChild(Rodape())

})