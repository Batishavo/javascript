import {heroes} from "../data/heroes";
/**
 *
 * @param {HTMLDivElementa} element
 */
export const promiseComponet = element => {
  // console.log('promisescomponent')
  const renderHero = hero => {
    element.innerHTML = hero.name;
  };

  const renderError = error => {
    element.innerHTML = `
            <h1>Error:</h1>
            <h3>${error}</h3>
        `;
  };

  const renderTwoHeroes = (hero1, hero2) => {
    element.innerHTML = `
            <h3>${hero1.name}</h3>
            <h3>${hero2.name}</h3>
        `;
  };

  const id1 = "5d86371f97c29d020f1e1f6d";
  const id2 = "5d86371f25a058e5b1c8a65e";

  // findHero(id1)
  //     .then(superhero =>renderHero(superhero))
  //     .catch(error => renderError(error));

  let hero1, hero2;

  //!Promise.all()
  Promise.all([
    findHero(id1),
    findHero(id2),
  ]).then(([hero1,hero2])=>renderTwoHeroes(hero1,hero2))
  .catch(renderError);

  //!Forma 2
  // findHero(id1)
  //   .then(hero =>{
  //     hero1=hero;
  //     return findHero(id2);
  //   }).then(hero2 =>{
  //     renderTwoHeroes(hero1,hero2);
  //   })
  //   .catch(renderError)
  //!Forma uno
  // findHero(id1)
  //   .then(hero => {
  //     hero1 = hero;
  //     findHero(id2)
  //       .then(hero2=>{
  //           renderTwoHeroes(hero1,hero2)
  //       })
  //       .catch(renderError);
  //   })
  //   .catch(renderError);

  //Promisae.all()
};
/**
 *
 * @param {String} id
 * @returns {Promise<Object>} promise}
 */
const findHero = id => {
  return new Promise((resolve, reject) => {
    // console.log("Hola mundo");
    const hero = heroes.find(hero => hero.id == id);
    if (hero) {
      resolve(hero);
      return;
    }

    reject(`Hero with id ${id} not found`);
  });
};
