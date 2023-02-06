import usersStore from "../../store/users-store";
import { deleteUser } from "../../uses-cases/delete-user-by-id";
import {showModal} from "../renders-modal/render-modal";
import "./render-table.css";

let table;

const createTable = () => {
  const table = document.createElement("table");
  const tableHeaders = document.createElement("thead");
  tableHeaders.innerHTML = `
       <tr>
        <th>ID</th>
        <th>Balace</th>
        <th>FirstName</th>
        <th>LasName</th>
        <th>isActive</th>
        <th>Actions</th>
       </tr> 
    `;

  const tableBody = document.createElement("tbody");
  table.append(tableHeaders, tableBody);
  return table;
};

/**
 * 
 * @param {MpuseEvent} event 
 */
const tableSelectListener = (event)=>{
  // console.log(event.target)
  const element = event.target.closest('.select-user');
  // console.log(element)
  if(!element) return;
  const id = element.getAttribute('data-id');
  showModal(id);
}
/**
 * 
 * @param {MpuseEvent} event 
 */
const tableDelectListener = async(event)=>{
  // console.log(event.target)
  const element = event.target.closest('.delete-user');
  // console.log(element)
  if(!element) return;
  const id = element.getAttribute('data-id');
  try{
    await deleteUser(id);
    await usersStore.reloadPage();
    document.querySelector('#current-page').innerHTML=usersStore.getCurrentPage.getCurrentPage();
    renderTabble();
  }
  catch(error){
    console.log(error);
    alert('No se pudeo eliminar');
  }
  
}

/**
 *
 * @param {HTMLDivElement} element
 */
export const renderTabble = element => {
  const users = usersStore.getUsers();

  if (!table) {
    table = createTable();
    element.append(table);
    table.addEventListener('click', event=>{
      tableSelectListener(event);
    });
    table.addEventListener('click', tableDelectListener);
  }

  let tableHTML = "";
  users.forEach(user => {
    tableHTML += `
            <tr>
                <td>${user.id}</td>
                <td>${user.balance}</td>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.isActive}</td>
                <td>
                    <a href="#/" class="select-user" data-id=${user.id}>Select</a>
                    <a href="#/" class="delete-user" data-id=${user.id}>Delete</a>
                </td>
            </tr> 
        `;
  });
  table.querySelector('tbody').innerHTML=tableHTML;
};
