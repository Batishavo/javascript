import {heroes} from "../data/heroes";
/**
 *
 * @param {HTMLDivElement} element
 */
export const forAwaitComponent = async element => {
  // console.log("forawait");
  const id = "5d86371fd55e2e2a30fe1ccb2";
  const heroIds = heroes.map(hero => hero.id);
  const heroPromises = getHeroesAsync(heroIds);
  for await(const hero of heroPromises){
    element.innerHTML += `${hero.name}<br/>`
  }
  // const hero = await getHeroAsync(id);
  // if(await getHeroAsync(id)){
  //     element.innerHTML='Si esxiste ese héroe';
  // }
  // element.innerHTML='No esxiste ese héroe';
  // // element.innerHTML=hero.name;
};

/**
 *
 * @param {Array<String>} heroIds
 * @returns {Array<Promise>}
 */
const getHeroesAsync = heroIds => {
  const heroPromises = [];

  heroIds.forEach(id => {
    heroPromises.push(getHeroAsync(id));
  });

  return heroPromises;
};

const getHeroAsync = async id => {
  await new Promise(resolve => {
    setTimeout(() => resolve(), 1000);
  });

  return heroes.find(hero => hero.id === id);
};
