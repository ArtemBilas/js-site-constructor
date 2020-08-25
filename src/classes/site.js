export class Site{
    constructor(selector){
        this.$el = document.querySelector(selector)
    } 

    render(module){
        this.$el.innerHTML = ''
        
        module.forEach(block => {
            this.$el.insertAdjacentHTML('beforeend', block.toHTML())
        });
    }
}