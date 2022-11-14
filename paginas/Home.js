import Titulo from '../componentes/Titulo.js'

export default function Home() {
    const Home = document.createElement('section')

    Home.appendChild(Titulo('Home'))

    return Home
}