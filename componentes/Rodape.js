import Paragrafo from './Paragrafo.js'

export default function Rodape() {
    const Rodape = document.createElement('footer')
    
    Rodape.appendChild(Paragrafo())

    return Rodape
}