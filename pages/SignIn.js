import Form from '../components/Form.js'
import Data from '../components/Data.js'
import Button from '../components/Button.js'

export default function SignIn() {
    const SignIn = Form('Sign In')

    SignIn.appendChild(Data('email', 'Email'))
    SignIn.appendChild(Data('password', 'Password'))

    SignIn.appendChild(Button('Sign In'))

    return SignIn
}