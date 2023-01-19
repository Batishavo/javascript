import {heroes} from '../data/heroes';
/**
* 
* @param {HTMLDivElementa} element
*/
export const promiseComponet = (element)=>{
    // console.log('promisescomponent')
    const renderHero = (hero)=>{
        element.innerHTML = hero.name;
    }

    const renderError = (error)=>{
        element.innerHTML = `
            <h1>Error:</h1>
            <h3>${error}</h3>
        `
    }

    const id1 = '5d86371f97c29d020f1e1f6d';
    findHero(id1)
        .then(superhero =>renderHero(superhero))
        .catch(error => renderError(error)); 
}
/**
 * 
 * @param {String} id 
 * @returns {Promise<Object>} promise}
 */
const findHero = (id)=>{
    return new Promise((resolve,reject)=>{   
        // console.log("Hola mundo");  
        const hero= heroes.find(hero=>hero.id==id);
        if(hero){
            resolve(hero);
            return;
        }
        
        reject(`Hero with id ${id} not found`);
    });
}