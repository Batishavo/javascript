const todos = JSON.parse(localStorage.getItem("todos")) || [];

const render = () => {
  const todoList = document.getElementById("todo-list");
  const todosTemplate = todos.map((t) => `<li> ${t} </li>`);
  todoList.innerHTML = todosTemplate.join(" ");
  const elementos = document.querySelectorAll("#todo-list li");
  elementos.forEach((elemento, i) => {
    elemento.addEventListener("click", () => {
      elemento.parentNode.removeChild(elemento);
      todos.splice(i, 1);
      console.log(todos, i);
      actualizarTodos(todos);
      render();
    });
  });
};

const actualizarTodos = (todos)=>{
    const todosString = JSON.stringify(todos);
    localStorage.setItem("todos", todosString);
}

window.onload = () => {
  render();
  const form = document.getElementById("todo-form");
  form.onsubmit = (e) => {
    e.preventDefault();
    const todo = document.getElementById("todo");
    const todoText = todo.value;
    todo.value = "";
    //console.log(todoText);
    todos.push(todoText);
    actualizarTodos(todos);
    // const todoList = document.getElementById("todo-list");
    // // todoList.innerHTML= "";
    // // for(let i=0;i<todos.length;i++) {
    // //     todoList.innerHTML +=`<li> ${todos[i]}</li>`;
    // // }
    // const todosTemplate = todos.map(t =>
    //     `<li> ${t} </li>`
    // )
    // //console.log(todosTemplate);
    // todoList.innerHTML = todosTemplate.join(" ");
    // const elementos = document.querySelectorAll("#todo-list li")
    // //console.log(elementos);
    // elementos.forEach((elemento,i)=>{
    //     elemento.addEventListener('click',() => {
    //        elemento.parentNode.removeChild(elemento)
    //        todos.splice(i,1)
    //        console.log(todos,i);
    //     })
    // })
    render();
  };
};
