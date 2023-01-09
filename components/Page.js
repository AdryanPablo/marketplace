import Component from './Component.js'

export default class Page extends Component{
    constructor(name) {
        this.Page = super('section')
        this.pageName(name)
    }

    set pageName(name) {
        this.pageName = name
    }

    get pageName() {
        return this.pageName
    }

    addTitle() {

                        
    }
}