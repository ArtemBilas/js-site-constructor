import logoImage from './assets/logoImage.png'
import {TitleBlock, TextBlock, TextColumnsBlock, ImageBlock} from './classes/blocks'
import { css } from './utils'

export const module = [

    new TitleBlock('Title of site',  {
        tag: 'h1',
        styles: css({
            'border-radius': '5px',
            'margin-bottom': '25px',
            'text-align': 'center',
            'padding': '50px 0',
            'background': 'rgb(34,195,191)',
            'background': `linear-gradient(128deg, rgba(34,195,191,1) 0%, rgba(253,187,45,0.6026611328125) 100%)`,
            'font-weight': '400'
        })
    }),

    new TextBlock('Here can be your sub title', {
        tag: 'h3',
        styles:  'border-radius: 5px; background: rgb(253,29,29); background: linear-gradient(297deg, rgba(253,29,29,1) 0%, rgba(220,252,69,0.5130252784707633) 71%); width: 100%; text-align: center; margin: 0 auto; padding: 50px 0;'
    }),

    new ImageBlock (logoImage, {
        alt: 'image',
        imageStyles: 'box-shadow: 2px 3px 4px rgba(0,0,0, .25); border-radius: 5px; width: 250px; margin: 50px auto;',
        styles: ' text-align: center;'
    }),

    new TextColumnsBlock([
        'Some lists', 
        'With interesting information',
        'And interesting facts',
        'Also you can setting view like you want (in future)'
    ],{
        styles: 'text-align: center; display: flex-decoration: column; padding: 15px;'
    }),
    

]
