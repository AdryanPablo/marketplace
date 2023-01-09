export default function Label(name) {
    const Label = document.createElement('label')
    Label.setAttribute('for', name.toLowerCase())

    Label. textContent = name

    return Label
}