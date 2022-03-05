import Item from './Item.js'

export default function Lista() {
    const Lista = document.createElement('ul')

    Lista.appendChild(Item('Home'))
    Lista.appendChild(Item('Entrar'))
    Lista.appendChild(Item('Cadastrar'))
    Lista.appendChild(Item('Contato'))
    Lista.appendChild(Item('Sair'))

    return Lista
}