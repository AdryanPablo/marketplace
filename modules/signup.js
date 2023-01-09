import isSet from './isSet.js'

export default function signup() {
    let name = document.querySelector('#name')
    let lastname = document.querySelector('#lastname')
    let email = document.querySelector('#email')
    let password = document.querySelector('#password')

    let form = document.querySelector('#signup')

    console.log(name)
    console.log(lastname)
    console.log(email)
    console.log(password)

    if (isSet(name) && isSet(lastname) && isSet(email) && isSet(password)) {

        form.submit()

    }
}