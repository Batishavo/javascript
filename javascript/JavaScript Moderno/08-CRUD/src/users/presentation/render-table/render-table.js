import usersStore from "../../store/users-store";
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
 * @param {HTMLDivElement} element
 */
export const renderTabble = element => {
  const users = usersStore.getUsers();

  if (!table) {
    table = createTable();
    element.append(table);
    //TODO: listener a la tabla
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
                    <a href="#/" data-id=>Select</a>
                    <a href="#/" data-id=>Delete</a>
                </td>
            </tr> 
        `;
  });
  table.querySelector('tbody').innerHTML=tableHTML;
};
