import temConteudo from './temConteudo.js'

export default function cadastrar() {
    let email = document.querySelector('#email')
    let senha = document.querySelector('#senha')

    let formulario = document.querySelector('#entrar')

    if (temConteudo(email) && temConteudo(senha)) {

        formulario.submit()

    }
}