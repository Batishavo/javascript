import {heroes} from "../data/heroes";

/**
 *
 * @param {HTMLDivElementa} element
 */
export const asyncAwaitComponet = async(element) => {
  // console.log(' asyncAwaitcomponent')
  const id1 = "5d86371fd55e2e2a30fe1ccb";
  const  id2 = "5d86371fd55e2e2a30fe1ccb1";

  const {name: name1} = await findHero(id1);
  const {name: name2} = await findHero(id2);

    element.innerHTML= `${name1} / ${name2}`;
};

const findHero = async (id) => {
  const heroe = heroes.find(hero => hero.id === id);
  if (!heroe) {
    throw `Hero not found`;
  }
  return heroe;
};
