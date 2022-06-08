import {model} from './model'
import {templates} from './templates'
import './styles/main.css'



const $site = document.querySelector('#site');

// console.log(templates['title']({value: 'text'}))

model.forEach(block => {
    const toHTML = templates[block.type]
    if(toHTML){
        $site.insertAdjacentHTML('beforeend', toHTML(block));
    }
})
