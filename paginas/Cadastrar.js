import Titulo from '../componentes/Titulo.js'
import Formulario from '../componentes/Formulario.js'
import Entrada from '../componentes/Entrada.js'
import Botao from '../componentes/Botao.js'

export default function Cadastrar() {
    const Cadastrar = Formulario('Cadastrar')

    Cadastrar.appendChild(Entrada('text', 'Nome'))
    Cadastrar.appendChild(Entrada('text', 'Sobrenome'))
    Cadastrar.appendChild(Entrada('email', 'Email'))
    Cadastrar.appendChild(Entrada('password', 'Senha'))

    Cadastrar.appendChild(Botao('Cadastrar'))

    return Cadastrar
}