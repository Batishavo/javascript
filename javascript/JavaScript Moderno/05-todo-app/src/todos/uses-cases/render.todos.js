import {Todo} from "../models/todo.models";
import {createTodoHtml} from "./create-todo-html";

let element;
/**
 *
 * @param {String} elementId
 * @param {Todo} todos
 */
export const renderTodos = (elementId, todos = []) => {
  //console.log("id:",elementId);
  //TODO: referencia
  if (!element) element=document.querySelector(elementId);
  if (!element) throw new Error(`Element ${elementId} not found`);
  
  element.innerHTML = '';

  todos.forEach(todo => {
    //console.log(todo)
    //console.log(element,todo)
    element.append(createTodoHtml(todo));
  });
};
