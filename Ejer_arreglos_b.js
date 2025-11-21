let numeros = [2, 4, 6, 8, 10];
for(let i=1;i<=numeros.length;i++){
    console.log(numeros[i-1]);
}
console.log("");

for(let numero of numeros){
    console.log(numero);
    
}

//La diferencia que encontre es que en el primer for hay tres momentos
//declara una variable la inicializa despues la condicion y el incremento esto nos permite controlar la posicion
//en el segundo for nos permite recorrer directamente los valores no lo indices 