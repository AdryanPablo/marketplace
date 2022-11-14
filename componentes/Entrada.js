import Label from './Label.js'
import Input from './Input.js'

export default function Entrada(tipo, nome) {
    const Entrada = document.createElement('div')

    Entrada.appendChild(Label(nome))
    Entrada.appendChild(Input(tipo, nome))

    return Entrada
}