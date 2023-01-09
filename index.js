import Header from './components/Header.js'
import Main from './components/Main.js'
import Footer from './components/Footer.js'

const root = document.querySelector('body')

window.addEventListener('load', () => {

    root.appendChild(Header())
    root.appendChild(Main())
    root.appendChild(Footer())

})