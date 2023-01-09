import signin from '../modules/signin.js'
import signup from '../modules/signup.js'
import edit from '../modules/editData.js'

export default function Button(content) {
    const Button = document.createElement('button')
    Button.setAttribute('type', 'submit')

    Button.textContent = content

    Button.addEventListener('click', (event) => {

        event.preventDefault()

        let button = event.target.innerHTML

        if (button == 'Sign In') {

            signin()

        } else if (button == 'Sign Up') {

            signup()

        } else if (button == 'Edit') {

            edit()

        }
    })
    
    return Button
}