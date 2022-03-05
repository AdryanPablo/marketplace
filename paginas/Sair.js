import Titulo from '../componentes/Titulo.js'

export default function Sair() {
    const Sair = document.createElement('section')

    Sair.appendChild(Titulo('Sair'))

    return Sair
}