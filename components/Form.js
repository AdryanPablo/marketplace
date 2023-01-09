import Legend from './Legend.js'

export default function Form(name) {
    const Form = document.createElement('form')
    Form.setAttribute('action', `${name.toLowerCase().replace(' ', '')}.php`)
    Form.setAttribute('method', 'POST')
    Form.setAttribute('id', name.toLowerCase().replace(' ', ''))

    Form.appendChild(Legend(name))

    return Form
}