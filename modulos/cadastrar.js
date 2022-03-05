import temConteudo from './temConteudo.js'

export default function cadastrar() {
    let nome = document.querySelector('#nome')
    let sobrenome = document.querySelector('#sobrenome')
    let email = document.querySelector('#email')
    let senha = document.querySelector('#senha')

    let formulario = document.querySelector('#cadastrar')

    if (temConteudo(nome) && temConteudo(sobrenome) && temConteudo(email) && temConteudo(senha)) {

        formulario.submit()

    }
}