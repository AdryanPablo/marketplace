import Home from '../pages/Home.js'

export default function Main() {
    const Main = document.createElement('main')

    Main.appendChild(Home())

    return Main
}