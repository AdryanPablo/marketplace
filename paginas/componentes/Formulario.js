export default function Formulario(nome) {
    const Formulario = document.createElement('form')
    
    Formulario.setAttribute('action', `${nome.toLowerCase()}.php`)
    Formulario.setAttribute('method', 'POST')

    return Formulario
}