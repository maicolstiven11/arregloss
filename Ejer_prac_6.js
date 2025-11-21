let celular ={
    marca:"tecno",
    ram:8,
    color:"negro",
    pantalla: "curva",
    proteccion:"ip68/ip69"
}

for(let [clave, valor] of Object.entries(celular)){
    console.log(`la clave es ${clave} y el valor es ${valor}`);
    
}