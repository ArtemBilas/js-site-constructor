import './styles/main.css'
import {module} from './module'
import {templates} from './templates'

const site = document.querySelector('#site')

module.forEach(block => {
    site.insertAdjacentHTML('beforeend', block.toHTML())
})

