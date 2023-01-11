import html from "./app.html?raw";
import todoStore from "../store/todo.store";
import {renderTodos} from "./uses-cases";

const ElementIds = {
  TodosList: ".todo-list",
  NewTodoInput: "#new-todo-input",
  Destroy: "destroy",
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
  const todoListUl = document.querySelector(ElementIds.TodosList);
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
};
