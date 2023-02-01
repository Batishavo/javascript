/**
 * @returns {Object} quote information
 */
const fetchCharacter = async () => {
  let num = getRandomInt(25);
  const res = await fetch(`https://rickandmortyapi.com/api/character/${num}`);
  const data = await res.json();
  // console.log(res)
  console.log(data);
  return data;
};
/**
 *
 * @param {HTMLDivElement} element
 */
const characterlabel = document.createElement("blockcharacter");
const authLabel = document.createElement("h3");
const nextCharacterButton = document.createElement("button");

export const BreakingbadApp = async element => {
  // console.log('Hola mundo');
  document.querySelector("#app-title").innerHTML = "Breakingbad App";
  element.innerHTML = "Loading...";
  //  fetchCharacter();
  // element.innerHTML='Tenemos Data';
  //const render = await renderCharacter(element); 
  //nextCharacterButton.setAttribute("id", "btn-action");
  
  const renderCharacter = (character) => {
    characterlabel.innerHTML = character.name;
    authLabel.innerHTML = character.species;
    element.replaceChildren(characterlabel, authLabel, nextCharacterButton);
    //doit();
  };
  nextCharacterButton.addEventListener('click',async()=>{
    element.innerHTML='Loading';
    const quote = await fetchCharacter();
    renderCharacter(quote);
  })
  nextCharacterButton.innerText = "Next Character";
  

  fetchCharacter().then(data => renderCharacter(data));
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const doit = () => {
  const actionButton = document.querySelector("#btn-action");
  console.log(actionButton);
  actionButton.addEventListener("click", event => {
    //   console.log("presionado");
    fetchCharacter().then(renderCharacter);
  });
};
