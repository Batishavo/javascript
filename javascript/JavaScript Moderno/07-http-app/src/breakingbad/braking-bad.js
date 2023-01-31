/**
 * @returns {Object} quote information
 */
const fetchCharacter = async() =>{
    const res = await fetch('https://rickandmortyapi.com/api/character/2');
    const data = await res.json();
    // console.log(res)
    console.log(data)
    return data;
}
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = (element) =>{
    // console.log('Hola mundo');
    document.querySelector('#app-title').innerHTML = 'Breakingbad App';
    element.innerHTML='Loading...';
    //  fetchCharacter();
    // element.innerHTML='Tenemos Data';

    const characterlabel = document.createElement('blockcharacter');
    const authLabel = document.createElement('h3');
    const nextCharacterButton= document.createElement('button');
    nextCharacterButton.innerText='Next Character';
    const renderCharacter = (character)=>{
        characterlabel.innerHTML= character.name;
        authLabel.innerHTML = character.species;
        element.replaceChildren(characterlabel,authLabel,nextCharacterButton)
    }

    fetchCharacter().then(data => renderCharacter(data));

}