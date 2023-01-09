import Form from '../components/Form.js'
import Data from '../components/Data.js'
import Button from '../components/Button.js'

export default function Edit() {
    const Edit = Form('Edit')

    Edit.appendChild(Data('text', 'Name'))
    Edit.appendChild(Data('text', 'Last Name'))
    Edit.appendChild(Data('email', 'Email'))
    Edit.appendChild(Data('password', 'Password'))

    Edit.appendChild(Button('Edit'))

    return Edit
}