import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import {userModelToLocalhost} from "../mappers/user-to-localhost.mapper";
import {User} from "../models/user";

const base = `http://localhost:3001`;
/**
 *
 * @param {Like<User>} userLike
 */
export const saveUser = async userLike => {
  const user = new User(userLike);
  if (!user.firstName || !user.lastName) {
    throw "First & last name are required";
  }

  const userToSave = userModelToLocalhost(user);
  let userUpdated;
  //TODO: aqui falata un mapper
  if (user.id) {
    // throw 'No implementadao la actualización';
    userUpdated = await updateUser(userToSave);
  } else {
    userUpdated = await createUser(userToSave);
  }

  return localhostUserToModel(userUpdated);

};

/**
 * @param {Like<User>} user
 */
const createUser = async user => {
  const url = `${base}/users`;
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const newUser = await res.json();
  console.log(newUser);
  return newUser;
};

/**
 * @param {Like<User>} user
 */
const updateUser = async user => {
  const url = `${base}/users/${user.id}`;
  const res = await fetch(url, {
    method: "PATCH",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const updatedUser = await res.json();
  console.log({updatedUser});
  return updatedUser;
};
