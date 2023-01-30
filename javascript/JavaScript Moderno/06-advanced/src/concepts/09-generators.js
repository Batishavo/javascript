/**
* 
* @param {HTMLDivElementa} element
*/
export const generartorComponent = (element)=>{
    // console.log('generartorComponent')
    const myGenerator = myFirstGeneratorFunction();

    console.log(myGenerator.next());
}

function* myFirstGeneratorFunction(){

    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuearto valor';

    return 'No hay valores';
}