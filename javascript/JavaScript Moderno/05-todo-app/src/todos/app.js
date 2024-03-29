import html from "./app.html?raw";
import todoStore, { Filters } from "../store/todo.store";
import {renderTodos,renderPending} from "./uses-cases";

const ElementIds = {
  TodosList: ".todo-list",
  NewTodoInput: "#new-todo-input",
  Destroy: "destroy",
  ClearCompleted:'.clear-completed',
  TodoFilters: '.filtro',
  PendingCountLabel: '#pending-count'
};

/**
 *
 * @param {String} elementId
 */
export const App = elementId => {
  
  const displayTodos = () => {
    const todos = todoStore.getTodos(todoStore.getCurrentFilter());
    //console.log(todos)
    renderTodos(ElementIds.TodosList, todos);
    //console.log("-------")
    updatePendingCount();
  };

  const updatePendingCount = () =>{
    renderPending(ElementIds.PendingCountLabel);
  }

  //Cuando la funcion App() se llama
  (() => {
    const app = document.createElement("div");
    app.innerHTML = html;
    document.querySelector(elementId).appendChild(app);
    displayTodos();
  })();
  //Referencias HTML
  const newDescriptionInput = document.querySelector(ElementIds.NewTodoInput);
  const todoListUl = document.querySelector(ElementIds.TodosList);
  const completedTodoList = document.querySelector(ElementIds.ClearCompleted);
  const filtersLIs = document.querySelectorAll(ElementIds.TodoFilters);
  // const todoListU2 = document.querySelector(ElementIds.Destroy);
  ///Listeners
  newDescriptionInput.addEventListener("keyup", event => {
    if (event.keyCode !== 13) return;
    if (event.target.value.trim().length === 0) return;

    todoStore.addTodo(event.target.value);
    displayTodos();
    event.target.value = "";
  });

  todoListUl.addEventListener("click", event => {
    const element = event.target.closest("[data-id]");
    todoStore.toggleTodo(element.getAttribute("data-id"));
    displayTodos();
  });
  todoListUl.addEventListener("click", event => {
    const element = event.target.closest("[class]"),
      elementId = event.target.closest("[data-id]");
    //console.log(element.getAttribute("class"));
    if (element.getAttribute("class") == ElementIds.Destroy) {
      todoStore.deleteTodo(elementId.getAttribute("data-id"));
      displayTodos();
      //console.log("entro")
    }
    // const element = event.target.closest("[data-id]");
    //console.log(element);
    //
  });
  completedTodoList.addEventListener('click', () =>{
    todoStore.deleteCompleted();
    console.log("pushed")
    displayTodos();
  })
  filtersLIs.forEach(element => {
    element.addEventListener("click", (element) =>{
      filtersLIs.forEach(el => el.classList.remove('selected'));
      element.target.classList.add("selected")
      // console.log(element.target.text)
      switch (element.target.text){
        case 'Todos':
          todoStore.setFilter(Filters.All);
        break;
        case 'Pendientes':
          todoStore.setFilter(Filters.Pending);
        break;
        case 'Completados':
          todoStore.setFilter(Filters.Completed);
        break;

      }
      displayTodos();
    })
  });
};
