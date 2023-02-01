const state={
    currentPage:0,
    users:[],
}

const loadNextPage = async()=>{
    throw new Error('No implementado');
}

const loadPreviousPage = async()=>{
    throw new Error('No implementado');
}

//TODO: implementar
const onUserChanged=()=>{
    throw new Error('No implementado');
}

const reloadPage=async()=>{
    throw new Error('No implementado');
}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,

    getUser: () => [...state.users],
    getCurrentPage: () => state.currentPage,
}