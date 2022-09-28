const numeros=[44,78,0,4,56,1,6,0,6,16,84,8];
numeros.forEach(function(numeros){
    console.log(numeros*2);
});
//{aplicar funciones a cada elemento del array
const duplicar=numeros.map(function(numeros){
    return numeros*2;
});
const mayores =numeros.filter(function(numeros){
    return numeros>9;
})
console.log(duplicar);
//extraer elementos que cumplen una condicion - filtering
console.log('usando FILTER');
console.log(mayores);