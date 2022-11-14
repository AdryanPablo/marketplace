import Formulario from '../componentes/Formulario.js'
import Entrada from '../componentes/Entrada.js'
import Botao from '../componentes/Botao.js'

export default function Editar() {
    const Editar = Formulario('Editar')

    Editar.appendChild(Entrada('text', 'Nome'))
    Editar.appendChild(Entrada('text', 'Sobrenome'))
    Editar.appendChild(Entrada('email', 'Email'))
    Editar.appendChild(Entrada('password', 'Senha'))

    Editar.appendChild(Botao('Editar'))

    return Editar
}