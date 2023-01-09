import Link from './Link.js'

export default function Item(name) {
    const Item = document.createElement('li')

    Item.appendChild(Link(name))
    
    return Item
}