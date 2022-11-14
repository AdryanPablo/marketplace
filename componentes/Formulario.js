import Legenda from './Legenda.js'

export default function Formulario(nome) {
    const Formulario = document.createElement('form')
    Formulario.setAttribute('action', `${nome.toLowerCase()}.php`)
    Formulario.setAttribute('method', 'POST')
    Formulario.setAttribute('id', nome.toLowerCase())

    Formulario.appendChild(Legenda(nome))

    return Formulario
}