import cadastrar from '../modulos/cadastrar.js'

export default function Botao(conteudo) {
    const Botao = document.createElement('button')
    Botao.setAttribute('type', 'submit')

    Botao.textContent = conteudo

    Botao.addEventListener('click', (event) => {

        event.preventDefault()
        cadastrar()
    
    })
    
    return Botao
}