import { localhostUserToModel } from "../mappers/localhost-user.mapper";

const base = `http://localhost:3001`;
/**
 * 
 * @param {Number} page 
 * @returns {Promise<User[]>}
 */
export const loadUsersByPage = async(page =1)=>{
    const url = `${ base }/users?_page=${ page }`;
    const res = await fetch(url);
    const data = await res.json();
    const users = data.map(userLike=> localhostUserToModel(userLike));
    // const users2 = [...data];
    // console.log(users);
    // console.log(users2)
    return users;
}
