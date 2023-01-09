import Paragraph from './Paragraph.js'

export default function Footer() {
    const Footer = document.createElement('footer')
    
    Footer.appendChild(Paragraph('Made by Ádryan Pablo'))

    return Footer
}