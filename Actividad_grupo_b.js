let verduras=["pepino", "lechuga", "remolacha", "zanahoria", "cebolla" ]
for(let i=1;i<=verduras.length;i++){
    console.log(`la posicion es ${i}`);
    
    console.log(verduras[i-1]);
    
}
console.log("");

for(let verdura of verduras){
    console.log(verdura);
    
}