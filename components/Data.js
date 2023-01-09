import Label from './Label.js'
import Input from './Input.js'

export default function Data(type, name) {
    const Data = document.createElement('div')

    Data.appendChild(Label(name))
    Data.appendChild(Input(type, name))

    return Data
}