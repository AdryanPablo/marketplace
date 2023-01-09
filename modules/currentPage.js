import Home from '../pages/Home.js'
import SignIn from '../pages/SignIn.js'
import SignUp from '../pages/SignUp.js'
import Edit from '../pages/Edit.js'
import Contact from '../pages/Contact.js'
import SignOut from '../pages/SignOut.js'

export default function currentPage(page) {
    let currentPage

    if (page == 'SignIn') {

        currentPage = SignIn()

    } else if (page == 'SingUp') {

        currentPage = SignUp()

    } else if (page == 'Edit') {

        currentPage = Edit()

    } else if (page == 'Contact') {

        currentPage = Contact()

    } else if (page == 'SignOut') {

        currentPage = SignOut()

    } else {

        currentPage = Home()

    }

    return currentPage
}