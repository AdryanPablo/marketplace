import isSet from './isSet.js'

export default function signup() {
    let email = document.querySelector('#email')
    let password = document.querySelector('#password')

    let form = document.querySelector('#signin')

    if (isSet(email) && isSet(password)) {

        form.submit()

    }
}