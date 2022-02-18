export default function Input(tipo, nome) {
    const Input = document.createElement('input')

    Input.setAttribute('type', tipo)
    Input.setAttribute('name', nome)

    return Input
}