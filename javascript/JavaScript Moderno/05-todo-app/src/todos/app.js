import html from "./app.html?raw";
import todoStore from "../store/todo.store";
import {renderTodos} from "./uses-cases";

const ElementIds = {
  TodosList: ".todo-list",
  NewTodoInput: "#new-todo-input",
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
  };

  //Cuando la funcion App() se llama
  (() => {
    const app = document.createElement("div");
    app.innerHTML = html;
    document.querySelector(elementId).appendChild(app);
    displayTodos();
  })();
  //Referencias HTML
  const newDescriptionInput = document.querySelector(ElementIds.NewTodoInput);
  //console.log(newDescriptionInput);
  ///Listeners
  //console.log(ElementIds.NewTodoInput);
  newDescriptionInput.addEventListener("keyup", event => {
    if (event.keyCode !== 13) return;
    if (event.target.value.trim().length === 0) return;

    todoStore.addTodo(event.target.value);
    displayTodos(); 
    event.target.value = "";
  });
};
