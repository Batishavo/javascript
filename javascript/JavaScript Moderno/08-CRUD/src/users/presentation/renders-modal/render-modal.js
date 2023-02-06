import './render-modal.css'
import { getUserById } from '../../uses-cases/get-user-by-id';
import {User} from '../../models/user';
import modalHtml from './render-modal.html?raw'

let modal,form;
let loadedUser = {};
//TODO: cargar usuario por id
/**
 * 
 * @param {String|Number} id 
 */
export const showModal = async(id) =>{
    modal?.classList.remove('hide-modal');
    loadedUser = {};
    if(!id)return;
    const user = await getUserById(id);
    setFormValues(user);
}

export const hideMOdal=()=>{
    modal?.classList.add('hide-modal');
    //TODO : Reset del formulario
    form?.reset();
}

/**
 * 
 * @param {User} user 
 */
const setFormValues = (user)=>{
    form.querySelector('[name="firstName"]').value = user.firstName;
    form.querySelector('[name="lastName"]').value = user.lastName;
    form.querySelector('[name="balance"]').value = user.balance;
    form.querySelector('[name="isActive"]').checked = user.isActive;
    loadedUser = user;
}

/**
 * 
 * @param {HTMLDivElement} element 
 * @param {(userLIke)=>Promise<void>} callback
 */
export const renderModal = (element,callback)=>{

    if(modal) return;
    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container hide-modal';
    form = modal.querySelector('form');


    modal.addEventListener('click',(event)=>{
        // console.log(event.target)
        if(event.target.className == 'modal-container'){
            hideMOdal();
        }

    });

    form.addEventListener('submit',async (event)=>{
        event.preventDefault();
        // console.log('Formulario enviado');
        const formData =  new FormData(form);
        const userLike = {...loadedUser};
        for(const [key, value] of formData){
            // console.log(iterator)
            if(key === 'balance'){
                userLike[key] = +value;
                continue;
            }

            if(key === 'isActive'){
                userLike[key] =  (value === 'on') ? true : false;
                continue;
            }
            userLike[key] = value;
        }   

        // console.log(userLike);
        //TODO: Guardar usuario
        await callback(userLike);
        hideMOdal();


    });

    element.append(modal);

} 