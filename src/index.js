import './styles/main.css'

import {module} from './module'

const site = document.querySelector('#site')

module.forEach(block => {
    let html
    if(block.type === 'title'){
       html = title(block)
    }else if (block.type === 'text'){
        html = text(block)
    }else if(block.type === 'textColumns'){
        html = textColumn(block)
    }
    site.insertAdjacentHTML('beforeend', html)
})

function title(block){
    return`
        <div class="row">
            <div class="col-sm">
                <h1>${block.value}</h1>
            </div>
        </div> 
    `
}

function text(block){
    return`
        <div class="row">
            <div class="col-sm">
                <p>${block.value}</p>
            </div>
        </div>
    `
}

function textColumn(block){
    console.log(block.value);
    
   const html = block.value.map(item => `<div class="col-sm">${item}</div>`)

    return`
        <div class="row">
            ${html.join('')}
        </div>
    `
}