import isSet from './isSet.js'

export default function edit() {
    let name
    let lastname
    let email
    let password

    let form = document.querySelector('#edit')

    if (isSet(name) && isSet(lastname) && isSet(email) && isSet(password)) {

        form.submit()

    }
}