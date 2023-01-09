import changePage from '../modules/changePage.js'

export default function Link(name) {
    const Link = document.createElement('a')
    Link.setAttribute('id', name)

    Link.textContent = name

    Link.addEventListener('click', () => {

        let page = name.toLowerCase().replace(' ', '')
        changePage(page)

    })

    return Link
}