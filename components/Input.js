export default function Input(type, name) {
    const Input = document.createElement('input')
    Input.setAttribute('type', type)
    Input.setAttribute('name', name.toLowerCase().replace(' ', ''))
    Input.setAttribute('id', name.toLowerCase().replace(' ', ''))
    Input.setAttribute('required', '')

    return Input
}