/**
* 
* @param {HTMLDivElementa} element
*/
export const generartorComponent = (element)=>{
    // console.log('generartorComponent')
    // const myGenerator = myFirstGeneratorFunction();

    // console.log(myGenerator.next());
    const genId = idGenerator();
    // console.log(genId.next());
    const button = document.createElement('button');
    button.innerHTML='Clic me';
    element.append(button);
    const renderButton =()=>{
        const {value}=genId.next();
        button.innerText=`Click ${value}`;
    }

    button.addEventListener('click',renderButton)
}

function* idGenerator(){
    let currentId = 0;

    while(true){
        yield ++currentId;
    }
}

function* myFirstGeneratorFunction(){

    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuearto valor';

    return 'No hay valores';
}