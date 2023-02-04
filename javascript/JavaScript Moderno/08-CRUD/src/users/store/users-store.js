import { loadUsersByPage } from "../uses-cases/load-users-by-page";
const state={
    currentPage:0,
    users:[],
}

const loadNextPage = async()=>{
   const users = await loadUsersByPage(state.currentPage + 1);
   if(users.length === 0) return;

   state.currentPage +=1;
   state.users = users;
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

    /**
     * 
     * @returns {User []}
     */
    getUsers: () => [...state.users],
    /**
     * 
     * @returns [NUmbre]
     */
    getCurrentPage: () => state.currentPage,
}