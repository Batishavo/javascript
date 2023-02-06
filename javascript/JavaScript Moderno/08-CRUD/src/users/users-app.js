import { renderAddButton } from './presentation/render-add-button/render-add-button';
import { renderButtons } from './presentation/render-buttons.css/render-buttons';
import { renderTabble } from './presentation/render-table/render-table';
import { renderModal } from './presentation/renders-modal/render-modal';
import usersStore from './store/users-store';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UsersApp = async(element) =>{

    element.innerHTML = 'Loading...';
    await usersStore.loadNextPage();
    element.innerHTML = '';
    // console.log(usersStore.getUsers())
    
    renderTabble(element);
    renderButtons(element);
    renderAddButton(element);
    renderModal(element);
}