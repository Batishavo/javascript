import { Todo } from  '../todos/models/todo.models';
const Filters = {
    All:'all',
    Completed: 'Completed',
    Pending:'Pending'
}

const state = {
    todos:[
        new Todo('Piedra del alma'),
        new Todo('Piedra del kriko'),
        new Todo('Piedra de la locura'),
        new Todo('Piedra de los papus'),
    ],
    filter:'all'
}

const initStore = () =>{
    // console.log(state)    
    // console.log('InitStore :0')
    loadStore();
}

const loadStore = () =>{
    // throw new Error('Not implemented');
    if(!localStorage.getItem('state')) return;
    // console.log(localStorage.getItem('state'))
    const {todos = [],filter=Filters.All} = JSON.parse( localStorage.getItem('state')) ;
    state.todos = todos;
    state.filter = filter;
    // console.log(state.todos)
}


const saveStateToLocalStorage = () =>{
    // console.log(JSON.stringify(state));
    localStorage.setItem('state',JSON.stringify(state));

}

const getTodos = (filter = Filters.All)=>{
    switch(filter){
        case Filters.All:
            return [...state.todos];
        
        case Filters.Completed:
            return state.todos.filter(todo => todo.done )

        case Filters.Pending:
            return state.todos.filter(todo => !todo.done)
        
        default:
            throw new Error(`Option ${filter} is not supported`);
    }
}
/**
 * 
 * @param {String} description 
 */

const addTodo = (description)=>{
    if(!description) throw new Error(`Description is required`);

    state.todos.push(new Todo(description));

    saveStateToLocalStorage(); //
}

/**
 * 
 * @param {String} todoId Todo identifier 
 */
const toggleTodo = (todoId)=>{
    state.todos = state.todos.map(todo=>{
        if(todo.id === todoId){
            todo.done = ! todo.done;
        }
        return todo;
    })
    saveStateToLocalStorage();
} 

//TODO:
const deleteTodo = (todoId)=>{
    state.todos = state.todos.filter(todo => todo.id !== todoId);
    saveStateToLocalStorage();
}
//TODO:
const deleteCompleted = ()=>{
    state.todos = state.todos.filter(todo => !todo.done);
    saveStateToLocalStorage();
}
/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = (newFilter = Filters.All) =>{
    state.filter = newFilter;
    saveStateToLocalStorage(); //
}

const getCurrentFilter = () =>{
    return state.filter;
}

export default{
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}