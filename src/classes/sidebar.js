import { TextBlock, TitleBlock, TextColumnsBlock, ImageBlock } from "./blocks"


export class Sidebar {
    constructor(selector, update) {
        this.$el = document.querySelector(selector)
        this.update = update
        this.init()
    }

    init() {
        this.$el.addEventListener('submit', this.addBlock.bind(this))
        this.$el.innerHTML = this.template
    }
    get template() {
        return [
            block('Text'),
            block('Title'),
            block('Image'),
            block('Text Columns'),
        ].join('')
    }

    addBlock(e){
        e.preventDefault()

        const type = e.target.value
        const value = e.target.value.value
        const styles = e.target.styles.value   

        

        const Constructor = type === 'text' ? TextBlock 
            : 'title' ? TitleBlock
            : 'image' ? ImageBlock
            : 'textColumns'
 
        const newBlock = new Constructor(value, {styles})
        
        this.update(newBlock)

        e.target.value.value = ''
        e.target.styles.value = ''
    }
}

function block(type) {
    return `
        <form name="${type}" class="form">
            <p>${type}</p>

            <div class="">
                <input class="form-input" type="text" name="value" placeholder="value">
            </div>

            <div class="">
                <input class="form-input" type="text" name="styles" placeholder="styles">
            </div>

            <button type="submit" class="form-btn">Create</button>
        </form>
    `
}