import './styles/main.css'
import { module } from './module'
import { Site } from './classes/site'
import { Sidebar } from './classes/sidebar'

const updateCallback = newBlock => {
    module.push(newBlock)
    site.render(module)
}

const site = new Site('#site')

new Sidebar('#panel', updateCallback)

site.render(module)
