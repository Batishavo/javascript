const base = `http://localhost:3001`;
/**
 * @param {String|Number} user
 */
export const deleteUser = async (id) => {
    const url = `${base}/users/${user.id}`;
    const res = await fetch(url, {
      method: "DELETE",
    });
  
    const deleteResult = await res.json();
    // console.log(newUser);
    return true;
  };
  