import { renderTabble } from './presentation/render-table/render-table';
import usersStore from './store/users-store';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UsersApp = async(element) =>{

    element.innerHTML = 'Loading...';
    await usersStore.loadNextPage();
    element.innerHTML = '';
    console.log(usersStore.getUsers())
    renderTabble(element);
}