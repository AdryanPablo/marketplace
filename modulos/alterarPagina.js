import paginaAtual from './paginaAtual.js'

export default function alterarPagina(pagina) {
    const Conteudo = document.querySelector('main')

    let paginaNova = paginaAtual(pagina)
    let paginaAntiga = Conteudo.firstChild

    Conteudo.replaceChild(paginaNova, paginaAntiga)
}