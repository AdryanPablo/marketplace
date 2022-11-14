import temConteudo from './temConteudo.js'

export default function editar() {
    let nome
    let sobrenome
    let email
    let senha

    let formulario = document.querySelector('#editar')

    if (temConteudo(nome) && temConteudo(sobrenome) && temConteudo(email) && temConteudo(senha)) {

        formulario.submit()

    }
}