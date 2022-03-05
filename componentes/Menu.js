import Lista from './Lista.js'

export default function Menu() {
    const Menu = document.createElement('nav')
    
    Menu.appendChild(Lista())

    return Menu
}