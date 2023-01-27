import { heroes } from "../data/heroes"

/**
* 
* @param {HTMLDivElementa} element
*/
export const asyncComponet = (element)=>{
    // console.log('asyncomponent')
    const id1= "5d86371fd55e2e2a30fe1cc4";
    console.log("Inicio de component");
    // console.log( findHero(id1) );
    findHero(id1)
        .then(name => element.innerHTML = name)
        .catch(error => element.innerHTML = error)

    console.log("Fin del component");
}

/**
 * 
 * @param {String} id 
 * @returns {Promise<String>} }
 */
const findHero = async(id) =>{
    const hero = heroes.find(hero => hero.id === id);
    if(!hero)
        throw `Hero with id ${id} not found`;
    return hero.name;
}