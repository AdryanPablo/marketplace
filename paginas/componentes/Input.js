export default function Input(tipo, nome) {
    const Input = document.createElement('input')
    Input.setAttribute('type', tipo)
    Input.setAttribute('name', nome)
    Input.setAttribute('id', nome.toLowerCase())
    Input.setAttribute('required', true)

    return Input
}