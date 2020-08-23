import {row, col} from '../utils'

class Block {
    constructor(type, value, options) {
        this.type = type
        this.value = value
        this.options = options
    }

    toHTML() {
        throw Error("Need to create this method")
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super('title', value, options)
    }

    toHTML() {
        const { styles, tag } = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), styles)
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super('text', value, options)
    }

    toHTML() {
        const { styles, tag } = this.options

        return row(col(`<${tag}>${this.value}</${tag}>`), styles)
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super('image', value, options)
    }

    toHTML() {
        const { styles, alt, imageStyles } = this.options
        const html = `<img src="${this.value}" alt="${alt}"  style="${imageStyles}"/>`
        return row(html, styles)
    }
}

export class TextColumnsBlock extends Block{
    constructor(value, options) {
        super('textColumns', value, options)
    }

    toHTML() {
        const { styles } = this.options
        const columnsStyle = 'border-radius: 5px; margin: 15px; padding: 15px; box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);'
        const html = this.value.map(item => col(item, columnsStyle))

        return row(html.join(''), styles)
    }
}