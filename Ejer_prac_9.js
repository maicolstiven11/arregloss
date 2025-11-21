let productos=[
    {
        nombre:"vaso",
        precio:1500,
        disponibilidad:"activa"
    },
    {
        nombre:"carro",
        precio:20000000,
        disponibilidad:"activa"
    },
    {
        nombre:"moto",
        precio:40000000,
        disponibilidad:"activa"
    }
]
for(let i=1;i<=productos.length;i++){
    console.log(productos[i-1].nombre);
    
}
console.log("");

for(let producto of productos){
    console.log(producto.nombre);
    
}