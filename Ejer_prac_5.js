let tareas= Array()
tareas.push("cocinar", "correr", "respirar")
tareas.pop()

console.log(tareas);
console.log("Lista de tareas");

for(let tarea of tareas){
    console.log(`${tarea}`);
    
}
