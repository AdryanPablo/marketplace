import Cadastro from './paginas/Cadastro.js'

const root = document.querySelector('body')

window.addEventListener('load', init)

function init() {

    root.appendChild(Cadastro())

}