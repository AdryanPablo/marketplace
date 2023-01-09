import Page from '../components/Page.js'

import Title from '../components/Title.js'

export default function Contact() {

    const Contact = document.createElement('section')
    
    Contact.appendChild(Title('Contact'))

    return Contact
}