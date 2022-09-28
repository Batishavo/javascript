/*function suma(num1,num2){
    return num1+num2;
}*/
let suma =(num1,num2)=>num1+num2;
console.log(suma(74,54));
//funcion flecha con un parametro 
const cuadrado=x=>x*x;

console.log(`el cuadrado de 4 es ${cuadrado(4)}`);

//funcion con cuerpo
const tipo=numero=>{
    if(numero>0){
        return `Es positivo`;
    }
    else if(numero<0){
        return `Es negativo`;
    }
}