import Label from './Label.js'
import Input from './Input.js'

export default function Entrada(tipo, nome) {
    const Entrada = document.createElement('div')
    const Label = Label(nome)
    const Input = Input(tipo, nome)

    Entrada.appendChild(Label)
    Entrada.appendChild(Input)

    return Entrada
}