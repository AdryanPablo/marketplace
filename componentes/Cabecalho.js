import Logo from './Logo.js'
import Menu from './Menu.js'

export default function Cabecalho() {
    const Cabecalho = document.createElement('header')

    Cabecalho.appendChild(Logo())
    Cabecalho.appendChild(Menu())

    return Cabecalho
}