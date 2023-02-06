import { userModelToLocalhost } from '../mappers/user-to-localhost.mapper';
import { User} from '../models/user'

const base = `http://localhost:3001`;
/**
 * 
 * @param {Like<User>} userLike 
 */
export const saveUser =async(userLike) =>{
    const user = new User(userLike);
    if(!user.firstName || !user.lastName){
        throw 'First & last name are required'; 
    }

    const userToSave = userModelToLocalhost(user);

    //TODO: aqui falata un mapper
    if(user.id){
        throw 'No implementadao la actualización';
        // return;
    }
    const updateUser = await createUser(userToSave);
    return updateUser;

}

/**
 * @param {Like<User>} user
 */
const createUser = async(user) =>{
    const url = `${base}/users`;
    const res =await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers:{
            'Content-Type': 'application/json'
        }

    });

    const newUser = await res.json();
    console.log(newUser);
    return newUser;

}