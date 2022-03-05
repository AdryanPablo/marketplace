import entrar from '../modulos/entrar.js'
import cadastrar from '../modulos/cadastrar.js'

export default function Botao(conteudo) {
    const Botao = document.createElement('button')
    Botao.setAttribute('type', 'submit')

    Botao.textContent = conteudo

    Botao.addEventListener('click', (event) => {

        event.preventDefault()

        let botao = event.target.innerHTML

        if (botao == 'Entrar') {

            entrar()

        } else if (botao == 'Cadastrar') {

            cadastrar()

        }
    })
    
    return Botao
}