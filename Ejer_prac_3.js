let notas=[8,5,6,7,10,6.5]
nota=0
for(let i=1;i<=notas.length;i++){
    console.log(notas[i-1]);
    
    nota+=notas[i-1]
}
prom=nota/notas.length;

console.log(`El promedio de las notas es: ${prom}`);
