/**
* 
* @param {HTMLDivElementa} element
*/
export const asyncAwait2Component = async(element)=>{
    // const value1 = await slowPromise();
    // const value2 = await mediumPromise();
    // const value3 = await fastPromise();

    const [value1,value2,value3]=await Promise.all([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
    ])
    element.innerHTML = `
        value1: ${value1}<br/>
        value2: ${value2}<br/>
        value3: ${value3}<br/>
    `;
}
const slowPromise = () => new Promise(resolve =>{
    setTimeout(()=>{
        resolve('slow Promise');
    },2000);
});
const mediumPromise = () => new Promise(resolve =>{
    setTimeout(()=>{
        resolve('medium Promise');
    },3000);
});
const fastPromise = () => new Promise(resolve =>{
    setTimeout(()=>{
        resolve('fast Promise');
    },4000);
});
