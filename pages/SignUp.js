import Form from '../components/Form.js'
import Data from '../components/Data.js'
import Button from '../components/Button.js'

export default function SignUp() {
    const SignUp = Form('Sign Up')

    SignUp.appendChild(Data('text', 'Name'))
    SignUp.appendChild(Data('text', 'Last Name'))
    SignUp.appendChild(Data('email', 'Email'))
    SignUp.appendChild(Data('password', 'Password'))

    SignUp.appendChild(Button('Sign Up'))

    return SignUp
}