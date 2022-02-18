export default function Label(nome) {
    const Label = document.createElement('label')

    Label.setAttribute('for', nome.toLowerCase())

    Label. textContent = nome

    return Label
}