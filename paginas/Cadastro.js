import Formulario from './componentes/Formulario.js'

export default function Cadastro() {
    const Cadastro = Formulario('Cadastro')
    const Legenda = Legenda('Cadastro')

    const entradaNome = Entrada('text', 'Nome')
    const entradaSobrenome = Entrada('text', 'Sobrenome')
    const entradaEmail = Entrada('email', 'Email')
    const entradaSenha = Entrada('password', 'Senha')

    Cadastro.appendChild(Legenda)
    Cadastro.appendChild(entradaNome)
    Cadastro.appendChild(entradaSobrenome)
    Cadastro.appendChild(entradaEmail)
    Cadastro.appendChild(entradaSenha)

    Cadastro.appendChild(formularioCadastro)

    return Cadastro
}