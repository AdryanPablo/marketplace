import Item from './Item.js'

export default function List() {
    const List = document.createElement('ul')

    List.appendChild(Item('Home'))
    List.appendChild(Item('Sign In'))
    List.appendChild(Item('Sign Up'))
    List.appendChild(Item('Edit'))
    List.appendChild(Item('Contact'))
    List.appendChild(Item('Sign Out'))

    return List
}