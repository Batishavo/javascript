import { heroes } from "../data/heroes"
/**
* 
* @param {HTMLDivElementa} element
*/
export const callbacksComponent = (element)=>{
    const id = '5d86371f25a058e5b1c8a65e';
    findHero(id,(hero)=>{
        element.innerHTML = hero.name;
    });
}

/**
 * 
 * @param {String} id 
 * @param {(heroe: Object)=> void} callback 
 */
const findHero = (id,callback)=>{
    
    const hero = heroes.find(heroe => heroe.id === id);

    callback(hero);
}