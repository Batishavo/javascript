import{heroes} from '../data/heroes'

/**
 * 
* 
* @param {HTMLDivElementa} element
*/
export const generatorsAsyncComponent =async(element)=>{
    // console.log('generatorsAsyncComponent')
    const heroGenerator = getHeroGenerator();
    let isFinished = false;
    while(!isFinished){
        const {value,done} = await heroGenerator.next(); 
        console.log({value,done})
        isFinished=done;
        element.innerHTML = value;
    }
    return 'fin';
}

async function* getHeroGenerator(){
    for(const hero of heroes){
        await sleep();
        yield hero.name;
    }
}

const sleep = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },500)
    })
}