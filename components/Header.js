import Logo from './Logo.js'
import Menu from './Menu.js'

export default function Header() {
    const Header = document.createElement('header')

    Header.appendChild(Logo())
    Header.appendChild(Menu())

    return Header
}