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
    ],
    filter:'all'
}

const initStore = () =>{
    console.log(state)
    console.log('InitStore :0')
}

const loadStore = () =>{
    throw new Error('Not implemented');
}

/**
 * 
 * @param {String} description 
 */

const addTodo = (description)=>{
    throw new Error('Not implemented');    
}

export default{
    initStore,
    loadStore,
}