import { showModal } from '../renders-modal/render-modal';
import './render-add-button.css'
/**
 * 
 * @param {HTMLDivElement} element 
 * @param {() => void} callback
 */
export const renderAddButton = (element,callback)=>{
    const fabButton = document.createElement('button')
    fabButton.innerText='+';
    fabButton.classList.add('fab-button');

    element.append(fabButton);

    //TODO:
    fabButton.addEventListener('click',()=>{
        // throw Error('No implementado')]
        // if(!callback)return;
        // callback();
        showModal();
    });
}