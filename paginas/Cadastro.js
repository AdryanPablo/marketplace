import Formulario from '../componentes/Formulario.js'
import Entrada from '../componentes/Entrada.js'
import Botao from '../componentes/Botao.js'

export default function Cadastro() {
    const Cadastro = Formulario('Cadastro')

    Cadastro.appendChild(Entrada('text', 'Nome'))
    Cadastro.appendChild(Entrada('text', 'Sobrenome'))
    Cadastro.appendChild(Entrada('email', 'Email'))
    Cadastro.appendChild(Entrada('password', 'Senha'))

    Cadastro.appendChild(Botao('Cadastrar'))

    return Cadastro
}