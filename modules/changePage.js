import Contact from '../pages/Contact.js'
import Edit from '../pages/Edit.js'
import Home from '../pages/Home.js'
import SignIn from '../pages/SignIn.js'
import SignOut from '../pages/SignOut.js'
import SignUp from '../pages/SignUp.js'
import currentPage from './currentPage.js'

export default function changePage(page) {
    const Main = document.querySelector('main')

    let newPage = pages[page]
    let oldPage = Main.firstChild

    Main.replaceChild(newPage, oldPage)
}

const pages = {
    'home': Home(),
    'signin': SignIn(),
    'signup': SignUp(),
    'singout': SignOut(),
    'edit': Edit(),
    'contact': Contact(),
}