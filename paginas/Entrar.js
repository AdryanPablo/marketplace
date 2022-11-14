import Formulario from '../componentes/Formulario.js'
import Entrada from '../componentes/Entrada.js'
import Botao from '../componentes/Botao.js'

export default function Entrar() {
    const Entrar = Formulario('Entrar')

    Entrar.appendChild(Entrada('email', 'Email'))
    Entrar.appendChild(Entrada('password', 'Senha'))

    Entrar.appendChild(Botao('Entrar'))

    return Entrar
}