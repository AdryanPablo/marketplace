export default function Paragrafo(conteudo) {
    const Paragrafo = document.createElement('p')
    Paragrafo.textContent = conteudo

    return Paragrafo
}