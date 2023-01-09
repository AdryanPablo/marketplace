import Title from '../components/Title.js'

export default function SignOut() {
    const SignOut = document.createElement('section')

    SignOut.appendChild(Title('Sign Out'))

    return SignOut
}