import Title from '../components/Title.js'

export default function Home() {
    const Home = document.createElement('section')

    Home.appendChild(Title('Home'))

    return Home
}