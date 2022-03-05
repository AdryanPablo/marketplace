import Titulo from '../componentes/Titulo.js'

export default function Contato() {
    const Contato = document.createElement('section')
    
    Contato.appendChild(Titulo('Contato'))

    return Contato
}