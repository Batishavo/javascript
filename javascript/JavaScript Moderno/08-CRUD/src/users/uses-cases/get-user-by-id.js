import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { User} from '../models/user';

const base = `http://localhost:3001`;
/**
 * 
 * @param {String|Number} page 
 * @returns {Promise<User>}
 */
export const getUserById = async(id)=>{
    const url = `${ base }/users/${ id }`;
    const res = await fetch(url);
    const data = await res.json();
    
    const user = localhostUserToModel(data);
    console.log({user})
    
    return user;
}