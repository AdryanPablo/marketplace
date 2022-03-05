import Ancora from './Ancora.js'

export default function Item(nome) {
    const Item = document.createElement('li')

    Item.appendChild(Ancora(nome))
    
    return Item
}